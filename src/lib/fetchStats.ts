import { createPublicClient, http, formatUnits } from 'viem';
import { ActivePoolABI, PriceFeedABI } from '@/config/abis';
import {
  SUBGRAPH_URL,
  RPC_URL,
  BRANCHES,
  ACTIVE_POOL_CONTRACTS,
  PRICE_FEED_CONTRACTS,
  STATS_REVALIDATE_INTERVAL,
  type Branch,
} from '@/config/env';
import { PROTOCOL_STATS_QUERY } from '@/lib/queries';
import { type StatsData, type SubgraphResponse, PLACEHOLDER_STATS } from '@/types/stats';

// BSC chain definition
const bsc = {
  id: 56,
  name: 'BNB Smart Chain',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: { http: [RPC_URL] },
  },
} as const;

// Create viem client for RPC calls
const client = createPublicClient({
  chain: bsc,
  transport: http(RPC_URL),
});

/**
 * Fetches stats from the Goldsky subgraph
 * Returns: unoBorrowed, trovesOpen, avgInterest
 */
async function fetchSubgraphStats(): Promise<Pick<StatsData, 'unoBorrowed' | 'trovesOpen' | 'avgInterest'>> {
  try {
    const response = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: PROTOCOL_STATS_QUERY }),
      next: { revalidate: STATS_REVALIDATE_INTERVAL },
    });

    if (!response.ok) {
      console.error('Subgraph fetch failed:', response.status);
      return {
        unoBorrowed: PLACEHOLDER_STATS.unoBorrowed,
        trovesOpen: PLACEHOLDER_STATS.trovesOpen,
        avgInterest: PLACEHOLDER_STATS.avgInterest,
      };
    }

    const json: SubgraphResponse = await response.json();
    const { troves, interestRateBrackets } = json.data;

    // Calculate total UNO borrowed (sum of all active trove debts)
    let unoBorrowed = 0;
    for (const trove of troves) {
      try {
        const debt = BigInt(trove.debt);
        unoBorrowed += Number(formatUnits(debt, 18));
      } catch {
        // Skip invalid debt values
      }
    }

    // Count of active troves
    const trovesOpen = troves.length;

    // Calculate weighted average interest rate
    let totalWeightedRate = 0;
    let totalDebt = 0;
    for (const bracket of interestRateBrackets) {
      try {
        const rate = Number(formatUnits(BigInt(bracket.rate), 18));
        const debt = Number(formatUnits(BigInt(bracket.totalDebt), 18));
        totalWeightedRate += rate * debt;
        totalDebt += debt;
      } catch {
        // Skip invalid bracket values
      }
    }
    const avgInterest = totalDebt > 0 ? totalWeightedRate / totalDebt : 0;

    return { unoBorrowed, trovesOpen, avgInterest };
  } catch (error) {
    console.error('Error fetching subgraph stats:', error);
    return {
      unoBorrowed: PLACEHOLDER_STATS.unoBorrowed,
      trovesOpen: PLACEHOLDER_STATS.trovesOpen,
      avgInterest: PLACEHOLDER_STATS.avgInterest,
    };
  }
}

/**
 * Fetches TVL from on-chain contracts
 * For each branch: collateral balance * price
 */
async function fetchTVL(): Promise<number> {
  try {
    let totalTVL = 0;

    for (const branch of BRANCHES) {
      try {
        // Get collateral balance from ActivePool
        const collBalance = await client.readContract({
          address: ACTIVE_POOL_CONTRACTS[branch as Branch],
          abi: ActivePoolABI,
          functionName: 'getCollBalance',
        });

        // Get price from PriceFeed
        const [price] = await client.readContract({
          address: PRICE_FEED_CONTRACTS[branch as Branch],
          abi: PriceFeedABI,
          functionName: 'fetchPrice',
        });

        // Calculate TVL for this branch: collateral * price (both in 18 decimals)
        const collateralValue = Number(formatUnits(collBalance, 18)) * Number(formatUnits(price, 18));
        totalTVL += collateralValue;
      } catch (error) {
        console.error(`Error fetching TVL for branch ${branch}:`, error);
        // Continue with other branches
      }
    }

    return totalTVL;
  } catch (error) {
    console.error('Error fetching TVL:', error);
    return PLACEHOLDER_STATS.tvl;
  }
}

/**
 * Fetches all protocol stats combining subgraph and RPC data
 */
export async function fetchProtocolStats(): Promise<StatsData> {
  try {
    // Fetch both data sources in parallel
    const [subgraphStats, tvl] = await Promise.all([fetchSubgraphStats(), fetchTVL()]);

    return {
      tvl,
      ...subgraphStats,
    };
  } catch (error) {
    console.error('Error fetching protocol stats:', error);
    return PLACEHOLDER_STATS;
  }
}

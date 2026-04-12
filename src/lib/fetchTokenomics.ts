import { createPublicClient, http, formatUnits } from 'viem';
import { ERC20ABI } from '@/config/abis';
import { RPC_URL, BINOTA_TOKEN_ADDRESS, STATS_REVALIDATE_INTERVAL } from '@/config/env';
import { ALLOCATION_CONFIG, TOTAL_SUPPLY_OVERRIDE } from '@/config/tokenomics';
import type { TokenomicsData } from '@/types/stats';

// Monad chain definition
const monad = {
  id: 143,
  name: 'Monad',
  nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
  rpcUrls: {
    default: { http: [RPC_URL] },
  },
} as const;

// Create viem client for RPC calls
const client = createPublicClient({
  chain: monad,
  transport: http(RPC_URL),
});

/**
 * Fetches BINOTA token total supply from on-chain
 */
async function fetchTotalSupply(): Promise<number> {
  // Use override if configured
  if (TOTAL_SUPPLY_OVERRIDE !== null) {
    return TOTAL_SUPPLY_OVERRIDE;
  }

  try {
    const totalSupply = await client.readContract({
      address: BINOTA_TOKEN_ADDRESS,
      abi: ERC20ABI,
      functionName: 'totalSupply',
    });

    return Number(formatUnits(totalSupply, 18));
  } catch (error) {
    console.error('Error fetching BINOTA total supply:', error);
    return 0;
  }
}

/**
 * Fetches tokenomics data combining on-chain supply with hardcoded allocation config
 */
export async function fetchTokenomics(): Promise<TokenomicsData> {
  const totalSupply = await fetchTotalSupply();

  return {
    totalSupply,
    allocations: ALLOCATION_CONFIG,
  };
}

// Export revalidation interval for use in components
export { STATS_REVALIDATE_INTERVAL };

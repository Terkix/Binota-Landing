// Types for protocol stats data

export interface StatsData {
	tvl: number; // Total Value Locked in USD
	unoBorrowed: number; // Total UNO debt from active troves
	trovesOpen: number; // Count of active troves
	avgInterest: number; // Weighted average interest rate (as decimal, e.g., 0.05 = 5%)
}

// Subgraph response types
export interface Trove {
	id: string;
	debt: string; // BigInt as string from subgraph
	status: string;
}

export interface InterestRateBracket {
	rate: string; // BigInt as string (rate in wei, needs division by 1e18)
	totalDebt: string; // BigInt as string (debt in wei)
}

export interface SubgraphResponse {
	data: {
		troves: Trove[];
		interestRateBrackets: InterestRateBracket[];
	};
}

// Placeholder stats for error/loading states
export const PLACEHOLDER_STATS: StatsData = {
	tvl: 0,
	unoBorrowed: 0,
	trovesOpen: 0,
	avgInterest: 0,
};

// Tokenomics types
export interface AllocationCategory {
	name: string;
	percentage: number;
	color: string;
	description: string;
}

export interface TokenomicsData {
	totalSupply: number;
	allocations: AllocationCategory[];
}

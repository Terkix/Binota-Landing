// Protocol configuration for fetching stats data

export const SUBGRAPH_URL =
  'https://api.goldsky.com/api/public/project_cmh1lybht009x5gp2fnth070b/subgraphs/binota-fe-bsc/0.0.1/gn';

export const RPC_URL = 'https://bsc-dataseed.binance.org/';

export const CHAIN_ID = 56; // BSC Mainnet

// Branch identifiers matching the protocol
export const BRANCHES = ['BNB'] as const;
export type Branch = (typeof BRANCHES)[number];

// PriceFeed contract addresses for each branch
export const PRICE_FEED_CONTRACTS: Record<Branch, `0x${string}`> = {
  BNB: '0xb63a30DbF88b1838394e6600031e4C30D3B649C9',
};

// ActivePool contract addresses for each branch (holds collateral balances)
export const ACTIVE_POOL_CONTRACTS: Record<Branch, `0x${string}`> = {
  BNB: '0x85181B51bb4BFd78aC1F3B88f1a4d994fb840622',
};

// ISR revalidation interval in seconds
export const STATS_REVALIDATE_INTERVAL = 60;

// BINOTA (BNT) token contract address
export const BINOTA_TOKEN_ADDRESS: `0x${string}` = '0x8a8fcf302D3D0D57214EDF68952DA82d44C9D41c';

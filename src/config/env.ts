// Protocol configuration for fetching stats data

export const SUBGRAPH_URL =
  'https://api.goldsky.com/api/public/project_cmh1lybht009x5gp2fnth070b/subgraphs/monata-fe-monad/0.0.1/gn';

export const RPC_URL = 'https://rpc.monad.xyz';

export const CHAIN_ID = 143; // Monad Mainnet

// Branch identifiers matching the protocol
export const BRANCHES = ['MON', 'shMON', 'sMON', 'gMON'] as const;
export type Branch = (typeof BRANCHES)[number];

// PriceFeed contract addresses for each branch
export const PRICE_FEED_CONTRACTS: Record<Branch, `0x${string}`> = {
  MON: '0xc6E2DD9b28E4b6475E06b96C89C4e728d29519a8',
  shMON: '0xdF2FB869f47024F619B7e6aEbc51e61Fedb07492',
  sMON: '0x05C20a54Eb7abD73C7067445fC341A67d0FbBef3',
  gMON: '0xc9065C8735B11B13B43C8A39Bd3DF165C3fFcefD',
};

// ActivePool contract addresses for each branch (holds collateral balances)
export const ACTIVE_POOL_CONTRACTS: Record<Branch, `0x${string}`> = {
  MON: '0x6Ae2AfA397068C6BabF67e09F972c0301df6dAF1',
  shMON: '0xFfe1a624d117a6f244ea1dFF6E4A1C94EAf7f56a',
  sMON: '0xC3c1F5FB04cD1f0EdF5Bb8035aB10df32341da17',
  gMON: '0x4Ef25871Af525E54539FE820DF87312d46D7fb00',
};

// ISR revalidation interval in seconds
export const STATS_REVALIDATE_INTERVAL = 60;

// BINOTA (BNT) token contract address
export const BINOTA_TOKEN_ADDRESS: `0x${string}` = '0xd9bb3A71D8906610E71d72c3eebBc040f1e02eb2';

// Minimal ABIs for TVL calculation

export const ActivePoolABI = [
  {
    type: 'function',
    name: 'getCollBalance',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const;

export const PriceFeedABI = [
  {
    type: 'function',
    name: 'fetchPrice',
    inputs: [],
    outputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'bool' },
    ],
    stateMutability: 'view',
  },
] as const;

// Minimal ERC20 ABI for totalSupply
export const ERC20ABI = [
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const;

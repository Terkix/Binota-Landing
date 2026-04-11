// Tokenomics configuration - allocation percentages for MONATA (MNA) token
// Update these values based on actual tokenomics

import type { AllocationCategory } from "@/types/stats";

export const ALLOCATION_CONFIG: AllocationCategory[] = [
  {
    name: "Emissions & Incentives",
    percentage: 40,
    color: "#ede61d", // Primary yellow
    description: "Protocol participation rewards, airdrop, staking, LP incentives",
  },
  {
    name: "Foundation / Treasury",
    percentage: 25,
    color: "#8a00c4", // Secondary purple
    description: "Protocol development, grants, future initiatives",
  },
  {
    name: "Community / DAO",
    percentage: 20,
    color: "#00a3ff", // Blue
    description: "Governance, community programs, ecosystem growth",
  },
  {
    name: "Team & Advisors",
    percentage: 15,
    color: "#00c853", // Green
    description: "Core team allocation with vesting schedule",
  },
];

// Total supply is fetched on-chain, but can be overridden here if needed
export const TOTAL_SUPPLY_OVERRIDE: number | null = null;

// GraphQL queries for protocol stats

export const PROTOCOL_STATS_QUERY = `
  query ProtocolStats {
    troves(where: { status: active }) {
      id
      debt
    }
    interestRateBrackets(where: { totalDebt_gt: 0 }) {
      rate
      totalDebt
    }
  }
`;

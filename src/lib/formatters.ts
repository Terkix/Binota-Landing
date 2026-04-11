import numbro from 'numbro';

export function formatCurrency(value: number): string {
  if (value === 0) return '$ -';
  return numbro(value).formatCurrency({
    average: true,
    mantissa: 2,
    optionalMantissa: true,
    abbreviations: { million: 'M', billion: 'B' },
  });
}

export function formatPercentage(value: number): string {
  if (value === 0) return '- %';
  // value is decimal (0.05 = 5%), multiply by 100 for display
  return `${numbro(value * 100).format({ mantissa: 2, optionalMantissa: true })}%`;
}

export function formatCount(value: number): string {
  if (value === 0) return '-';
  return numbro(value).format({ thousandSeparated: true });
}

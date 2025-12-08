export function countOdds(low: number, high: number): number {
  return Math.floor((high - low) / 2) + Number(low % 2 === 1 || high % 2 === 1)
}

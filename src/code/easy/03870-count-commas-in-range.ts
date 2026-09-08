export function countCommas(n: number): number {
  return Math.max(n - 1000 + 1, 0)
}
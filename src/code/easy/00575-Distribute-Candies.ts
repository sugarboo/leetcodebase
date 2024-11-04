export function distributeCandies(candyType: number[]): number {
  const n = candyType.length
  const types = new Set(candyType)
  const max = Math.floor(n / 2)

  return Math.min(types.size, max)
}

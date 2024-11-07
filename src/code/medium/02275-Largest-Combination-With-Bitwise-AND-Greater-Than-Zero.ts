export function largestCombination(candidates: number[]): number {
  const MAX_BITS = 24

  const frequencies = Array.from<number>({ length: MAX_BITS }).fill(0)

  for (let num of candidates) {
    for (let i = 0; num; num >>= 1) {
      frequencies[i++] += num & 1
    }
  }

  return Math.max(...frequencies)
}

export function numberOfArrays(difference: number[], lower: number, upper: number): number {
  let min = 0
  let max = 0
  let curr = 0

  for (const diff of difference) {
    curr += diff
    min = Math.min(min, curr)
    max = Math.max(max, curr)
  }

  return Math.max(0, upper - lower - (max - min) + 1)
}

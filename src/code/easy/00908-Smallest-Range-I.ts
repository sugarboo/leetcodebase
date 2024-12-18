export function smallestRangeI(nums: number[], k: number): number {
  const max = Math.max(...nums) - k
  const min = Math.min(...nums) + k

  if (min > max) {
    return 0
  }

  return max - min
}

export function minStartValue(nums: number[]): number {
  let sum = 0
  // Track the minimum cumulative sum
  let min = 0

  for (const num of nums) {
    sum += num
    min = Math.min(min, sum)
  }

  // If min is greater than 0, return 1
  return 1 - min
}

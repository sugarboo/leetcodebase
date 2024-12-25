export function largestSumAfterKNegations(nums: number[], k: number): number {
  while (k > 0) {
    nums.sort((a, b) => a - b)
    nums[0] = -nums[0]
    k--
  }

  return nums.reduce((acc, curr) => acc + curr, 0)
}

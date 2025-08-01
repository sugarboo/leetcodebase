export function maxProductDifference(nums: number[]): number {
  const n = nums.length
  nums.sort((a, b) => a - b)

  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1]
}

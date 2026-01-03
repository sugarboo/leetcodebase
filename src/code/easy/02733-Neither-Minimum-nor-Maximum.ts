export function findNonMinOrMax(nums: number[]): number {
  if (nums.length <= 2) {
    return -1
  }
  nums = nums.slice(0, 3).sort((a, b) => a - b)
  return nums[1]
}

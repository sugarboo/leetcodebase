export function maxAdjacentDistance(nums: number[]): number {
  const n = nums.length
  let ans = Math.abs(nums[0] - nums[n - 1])

  for (let i = 0; i < n - 1; i++) {
    ans = Math.max(ans, Math.abs(nums[i + 1] - nums[i]))
  }

  return ans
}

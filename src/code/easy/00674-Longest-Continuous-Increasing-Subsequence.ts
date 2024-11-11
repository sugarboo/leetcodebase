export function findLengthOfLCIS(nums: number[]): number {
  let ans = 0
  let anchor = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] >= nums[i]) {
      anchor = i
    }
    ans = Math.max(ans, i - anchor + 1)
  }

  return ans
}

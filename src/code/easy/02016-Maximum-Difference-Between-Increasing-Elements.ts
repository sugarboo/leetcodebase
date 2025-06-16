export function maximumDifference(nums: number[]): number {
  let ans = -1
  let prefixMin = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > prefixMin) {
      ans = Math.max(ans, nums[i] - prefixMin)
    } else {
      prefixMin = nums[i]
    }
  }

  return ans
}

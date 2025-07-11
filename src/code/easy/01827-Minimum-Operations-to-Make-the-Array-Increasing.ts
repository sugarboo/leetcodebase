export function minOperations(nums: number[]): number {
  let ans = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const addend = nums[i - 1] - nums[i] + 1
      nums[i] += addend
      ans += addend
    }
  }

  return ans
}

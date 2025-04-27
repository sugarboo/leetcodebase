export function countSubarrays(nums: number[]): number {
  let ans = 0

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === 2 * (nums[i - 1] + nums[i + 1])) {
      ans++
    }
  }

  return ans
}
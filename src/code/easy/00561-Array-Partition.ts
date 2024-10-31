export function arrayPairSum(nums: number[]): number {
  let ans = 0

  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    ans += Math.min(nums[i], nums[i + 1])
  }

  return ans
};

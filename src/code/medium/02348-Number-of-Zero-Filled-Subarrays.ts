export function zeroFilledSubarray(nums: number[]): number {
  let ans = 0
  let last = -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Previous non-zero index
      last = i
    }
    ans += i - last
  }

  return ans
}

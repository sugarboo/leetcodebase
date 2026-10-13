export function maxAlternatingSum(nums: number[]): number {
  // Sort the array by descending absolute value
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
  let ans = 0
  const n = nums.length

  // Choose the first half elements to be positive
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    ans += nums[i] ** 2
  }
  // Choose the remaining elements to be negative
  for (let i = Math.ceil(n / 2); i < n; i++) {
    ans -= nums[i] ** 2
  }

  return ans
}

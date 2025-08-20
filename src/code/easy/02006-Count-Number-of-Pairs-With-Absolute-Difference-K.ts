export function countKDifference(nums: number[], k: number): number {
  const n = nums.length
  let ans = 0

  // Map to count the frequency of each number
  const cnt = Array.from({ length: 100 }, () => 0)

  for (let i = 0; i < n; i++) {
    // Add the frequency of the number - k and the number + k to the answer
    ans += (cnt[nums[i] - k] || 0) + (cnt[nums[i] + k] || 0)
    // Increment the frequency of the number
    cnt[nums[i]] = (cnt[nums[i]] || 0) + 1
  }

  return ans
}

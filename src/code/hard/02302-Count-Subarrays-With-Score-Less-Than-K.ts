export function countSubarrays(nums: number[], k: number): number {
  // Length of input array
  const n = nums.length
  // Counter for valid subarrays
  let ans = 0
  // Running sum of current window
  let total = 0

  // i: left pointer (window start)
  // j: right pointer (window end)
  for (let i = 0, j = 0; j < n; j++) {
    // Add new element to window sum
    total += nums[j]

    // Shrink window from left while score >= k
    // Score = sum * length = total * (j-i+1)
    while (i <= j && total * (j - i + 1) >= k) {
      total -= nums[i]
      i++
    }

    // Add count of valid subarrays ending at j
    // For current window [i,j], all subarrays ending at j
    // and starting between i and j are valid
    ans += j - i + 1
  }

  return ans
}

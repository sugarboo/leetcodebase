export function continuousSubarrays(nums: number[]): number {
  // Map to maintain sorted frequency map of current window
  const freq = new Map<number, number>()
  let left = 0
  let right = 0
  const n = nums.length
  let count = 0

  while (right < n) {
    // Add current element to frequency map
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)

    // While window violates the condition |nums[i] - nums[j]| <= 2, shrink window from left
    while (Math.max(...freq.keys()) - Math.min(...freq.keys()) > 2) {
      // Remove leftmost element from frequency map
      const count = (freq.get(nums[left]) || 0) - 1
      if (count === 0) {
        freq.delete(nums[left])
      } else {
        freq.set(nums[left], count)
      }
      left++
    }
    // Add count of all valid subarrays ending at right
    count += right - left + 1

    right++
  }

  return count
}

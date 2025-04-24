export function countCompleteSubarrays(nums: number[]): number {
  let ans = 0
  // Count the number of distinct elements in the array
  const k = new Set(nums).size
  const freq = new Map<number, number>()

  // Keep track of the number of distinct elements in the current subarray
  let distinct = 0
  // Use a sliding window to find all subarrays with k distinct elements
  let start = 0
  for (let end = 0; end < nums.length; end++) {
    const num = nums[end]
    freq.set(num, (freq.get(num) || 0) + 1)
    if (freq.get(num) === 1) {
      distinct++
    }

    // Contract the window from the start while all k distinct elements are present
    while (distinct === k) {
      // All subarrays ending at 'right' starting from 'start' onwards are valid
      ans += nums.length - end

      const startNum = nums[start]
      freq.set(startNum, freq.get(startNum)! - 1)
      if (freq.get(startNum) === 0) {
        distinct--
      }
      start++
    }
  }

  return ans
}

export function longestNiceSubarray(nums: number[]): number {
  let maxLength = 0
  // Track bits used in current window
  let usedBits = 0

  // Start position of the window
  let left = 0
  for (let right = left; right < nums.length; right++) {
    // If current number shares bits with window, shrink window from left until there's no bit conflict
    while (usedBits & nums[right]) {
      // Remove leftmost element's bits
      usedBits ^= nums[left]
      left++
    }
    // Add current number to the window
    usedBits |= nums[right]

    // Update max length if current window is longer
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

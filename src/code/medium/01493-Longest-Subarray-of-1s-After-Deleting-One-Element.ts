export function longestSubarray(nums: number[]): number {
  let ans = 0
  let cnt0 = 0
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    // Count the number of 0s in the current window
    cnt0 += 1 - nums[right]
    // If the number of 0s in the current window is greater than 1,
    // move the left pointer to the right
    while (cnt0 > 1) {
      // Decrease the number of 0s in the current window
      cnt0 -= 1 - nums[left]
      left++
    }
    // Update the answer
    ans = Math.max(ans, right - left)
  }

  return ans
}

export function longestMonotonicSubarray(nums: number[]): number {
  // Track current length of increasing and decreasing sequence
  let maxLength = 1
  let incLength = 1
  let decLength = 1

  // Iterate through the array comparing adjacent elements
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      // If the next element is greater, extend the increasing sequence
      incLength++
      // Reset the decreasing sequence length
      decLength = 1
    } else if (nums[i + 1] < nums[i]) {
      // If the next element is smaller, extend the decreasing sequence
      decLength++
      // Reset the increasing sequence length
      incLength = 1
    } else {
      // If the next element is equal, reset both lengths
      incLength = 1
      decLength = 1
    }
    // Update the maximum length considering both increasing and decreasing sequences
    maxLength = Math.max(maxLength, incLength, decLength)
  }

  return maxLength
}

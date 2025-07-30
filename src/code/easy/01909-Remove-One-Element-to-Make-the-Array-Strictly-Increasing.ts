export function canBeIncreasing(nums: number[]): boolean {
  // Two pointers, i is the previous element, j is the current element
  let i = 0
  // Count the number of elements that are not strictly increasing
  let cnt = 0

  // Traverse the array
  for (let j = 1; j < nums.length; j++) {
    // If the current element is not strictly increasing, increment the count
    if (nums[i] >= nums[j]) {
      cnt++
    }
    // If the count is greater than 1, return false
    if (cnt > 1) {
      return false
    }
    // If the current element is strictly increasing, update the pointer
    if (i === 0 || nums[i] < nums[j] || nums[i - 1] < nums[j]) {
      i = j
    }
  }

  // If the count is less than or equal to 1, return true
  return true
}

export function search(nums: number[], target: number): number {
  // Set the left and right boundaries
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    // Get the middle index and middle value
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      // Case 1, return the middle index
      return mid
    } else if (nums[mid] < target) {
      // Case 2, discard the smaller half
      left = mid + 1
    } else {
      // Case 3, discard the larger half
      right = mid - 1
    }
  }

  // If we finish the search without finding target, return -1
  return -1
};

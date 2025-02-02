export function check(nums: number[]): boolean {
  const n = nums.length
  let rotations = 0

  // Count number of positions where current element is greater than next
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      rotations++
    }
  }

  // For a sorted and rotated array, there should be at most 1 position
  // where current element is greater than next element
  // If more than 1 such position exists, array cannot be sorted and rotated
  return rotations <= 1
}

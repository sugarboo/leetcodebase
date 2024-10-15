export function thirdMax(nums: number[]): number {
  // Get the descending nums and remove the repeated parts
  nums = Array.from(new Set(nums.sort((a, b) => b - a)))

  // Check the nums length and return the corresponding result
  if (nums.length < 3) {
    return nums[0]
  } else {
    return nums[2]
  }
}

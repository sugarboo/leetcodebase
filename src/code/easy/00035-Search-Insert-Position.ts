function searchInsert1(nums: number[], target: number): number {
  const index = nums.findIndex(num => num >= target)
  return index !== -1 ? index : nums.length
}

export function searchInsert(nums: number[], target: number): number {
  return searchInsert1(nums, target)
}

function removeDuplicates1(nums: number[]): number {
  nums = Array.from(new Set(nums))

  return nums.length
}

export function removeDuplicates(nums: number[]): number {
  return removeDuplicates1(nums)
}

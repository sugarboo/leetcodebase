function removeElement1(nums: number[], val: number): number {
  nums = nums.filter(num => num !== val)
  return nums.length
}

export function removeElement(nums: number[], val: number): number {
  return removeElement1(nums, val)
}

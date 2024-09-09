export function containsDuplicate(nums: number[]): boolean {
  const removed = Array.from(new Set(nums))
  return nums.length !== removed.length
}

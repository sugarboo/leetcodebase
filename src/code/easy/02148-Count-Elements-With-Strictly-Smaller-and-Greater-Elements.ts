export function countElements(nums: number[]): number {
  const min = Math.min(...nums)
  const max = Math.max(...nums)

  return nums.filter(num => num !== min && num !== max).length
}

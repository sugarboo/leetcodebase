export function transformArray(nums: number[]): number[] {
  nums = nums.map(num => num % 2)

  return nums.sort((a, b) => a - b)
}

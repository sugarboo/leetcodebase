export function runningSum(nums: number[]): number[] {
  let sum = 0

  return nums.map(num => sum += num)
}

export function findNumbers(nums: number[]): number {
  return nums.map(String).filter(str => str.length % 2 === 0).length
}
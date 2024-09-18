export function largestNumber(nums: number[]): string {
  nums = nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`))

  const result = nums.join('')
  return Number(result) === 0 ? '0' : result
}

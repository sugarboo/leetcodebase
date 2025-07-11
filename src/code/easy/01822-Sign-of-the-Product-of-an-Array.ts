export function arraySign(nums: number[]): number {
  return nums.reduce((sign, curr) => sign * Math.sign(curr), 1)
}

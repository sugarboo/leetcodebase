export function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a)
  const len = nums.length
  const positiveProduct = nums[0] * nums[1] * nums[2]
  const negativeProduct = nums[0] * nums[len - 1] * nums[len - 2]
  return Math.max(positiveProduct, negativeProduct)
}

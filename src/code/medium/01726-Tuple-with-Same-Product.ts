export function tupleSameProduct(nums: number[]): number {
  const n = nums.length
  const productMap = new Map<number, number>()

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j]
      productMap.set(product, (productMap.get(product) || 0) + 1)
    }
  }

  let result = 0
  for (const count of productMap.values()) {
    // If the product appears more than once, calculate the number of combinations
    if (count > 1) {
      // Calculate the number of combinations
      result += count * (count - 1) / 2
    }
  }

  // The result is multiplied by 8 because each tuple can be arranged in 8 different ways
  return result * 8
}

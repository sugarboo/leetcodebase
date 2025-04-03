export function maximumTripletValue(nums: number[]): number {
  const n = nums.length
  const prefixMax = Array(nums.length).fill(0)
  const suffixMax = Array(nums.length).fill(0)

  prefixMax[0] = nums[0]
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.max(prefixMax[i - 1], nums[i])
  }
  suffixMax[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    suffixMax[i] = Math.max(suffixMax[i + 1], nums[i])
  }
  // Handle edge cases where i - 1 or i + 1 would be out of bounds
  prefixMax[-1] = 0
  suffixMax[n] = 0

  let ans = 0

  // For index i, the maximum triplet value is (prefix_max[i - 1] - nums[i]) * suffix_max[i + 1].
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, (prefixMax[i - 1] - nums[i]) * suffixMax[i + 1])
  }

  return ans
}

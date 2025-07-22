export function maximumUniqueSubarray(nums: number[]): number {
  const n = nums.length
  const seen = new Set<number>()
  let ans = 0
  let prefixSum = 0

  for (let i = 0, j = 0; i < n; i++) {
    prefixSum += nums[i]

    while (seen.has(nums[i])) {
      seen.delete(nums[j])
      prefixSum -= nums[j]
      j++
    }

    seen.add(nums[i])
    ans = Math.max(ans, prefixSum)
  }

  return ans
}

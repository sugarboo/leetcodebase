export function waysToSplitArray(nums: number[]): number {
  const n = nums.length
  // Prefix sum array to store cumulative sums
  const prefixSum: number[] = Array.from<number>({ length: n }).fill(0)

  // Build a prefix sum array
  prefixSum[0] = nums[0]
  for (let i = 1; i < n; i++) {
    prefixSum[i] = nums[i] + prefixSum[i - 1]
  }

  let count = 0

  // Check each possible split position
  for (let i = 0; i < n - 1; i++) {
    // Sum of left part (0 to i)
    const leftSum = prefixSum[i]
    // Sum of right part (i + 1 to n - 1)
    const rightSum = prefixSum[n - 1] - prefixSum[i]

    if (leftSum >= rightSum) {
      count++
    }
  }

  return count
}

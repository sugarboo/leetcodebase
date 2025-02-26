export function maxAbsoluteSum(nums: number[]): number {
  let maxPrefixSum = 0
  let minPrefixSum = 0
  let prefixSum = 0

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    maxPrefixSum = Math.max(maxPrefixSum, prefixSum)
    minPrefixSum = Math.min(minPrefixSum, prefixSum)
  }

  return maxPrefixSum - minPrefixSum
}

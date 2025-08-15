export function findMiddleIndex(nums: number[]): number {
  const n = nums.length
  const sum = nums.reduce((a, b) => a + b, 0)
  let prefixSum = 0
  for (let i = 0; i < n; i++) {
    if (prefixSum === sum - prefixSum - nums[i]) {
      return i
    }
    prefixSum += nums[i]
  }

  return -1
}

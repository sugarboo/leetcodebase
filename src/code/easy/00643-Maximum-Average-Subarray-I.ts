export function findMaxAverage(nums: number[], k: number): number {
  let currentSum = 0

  for (let i = 0; i < k; i++) {
    currentSum += nums[i]
  }

  let maxSum = currentSum

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i]
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum / k
}

export function maxAscendingSum(nums: number[]): number {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum += nums[i]
    } else {
      maxSum = Math.max(maxSum, currentSum)
      currentSum = nums[i]
    }
  }

  return Math.max(maxSum, currentSum)
}

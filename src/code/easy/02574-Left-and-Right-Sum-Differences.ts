export function leftRightDifference(nums: number[]): number[] {
  const n = nums.length
  const leftSum = Array<number>(n).fill(0)
  const rightSum = Array<number>(n).fill(0)
  const result = Array<number>(n).fill(0)

  for (let i = 0; i < n; i++) {
    leftSum[i] = i === 0 ? 0 : leftSum[i - 1] + nums[i - 1]
  }

  for (let i = n - 1; i >= 0; i--) {
    rightSum[i] = i === n - 1 ? 0 : rightSum[i + 1] + nums[i + 1]
  }

  for (let i = 0; i < n; i++) {
    result[i] = Math.abs(leftSum[i] - rightSum[i])
  }

  return result
}

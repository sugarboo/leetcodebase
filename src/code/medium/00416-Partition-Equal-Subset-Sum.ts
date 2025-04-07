export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, num) => acc + num, 0)
  if (sum % 2 !== 0) {
    return false
  }
  const target = sum / 2
  const dp = Array<boolean>(target + 1).fill(false)
  dp[0] = true
  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num]
    }
  }
  return dp[target]
}

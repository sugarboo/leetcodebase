export function largestDivisibleSubset(nums: number[]): number[] {
  const n = nums.length
  if (n === 0)
    return []
  nums.sort((a, b) => a - b)
  const dp = Array(n).fill(0)
  const parent = Array(n).fill(0)
  let maxLen = 0
  let maxIndex = 0

  for (let i = 0; i < n; i++) {
    dp[i] = 1
    parent[i] = -1
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1
        parent[i] = j
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
      maxIndex = i
    }
  }

  const result: number[] = []
  while (maxIndex !== -1) {
    result.push(nums[maxIndex])
    maxIndex = parent[maxIndex]
  }
  return result.reverse()
}

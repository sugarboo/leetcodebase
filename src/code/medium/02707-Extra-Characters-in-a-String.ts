export function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length
  const dictSet = new Set(dictionary)
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const substring = s.slice(i, j)
      if (dictSet.has(substring)) {
        dp[j] = Math.min(dp[j], dp[i])
      } else {
        dp[j] = Math.min(dp[j], dp[i] + (j - i))
      }
    }
  }

  return dp[n]
}

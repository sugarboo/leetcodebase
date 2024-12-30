export function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const MOD = 1000000007
  const dp = Array.from<number>({ length: high + 1 }).fill(0)
  dp[0] = 1
  for (let i = 1; i <= high; i++) {
    if (i >= zero) {
      dp[i] = (dp[i] + dp[i - zero]) % MOD
    }
    if (i >= one) {
      dp[i] = (dp[i] + dp[i - one]) % MOD
    }
  }
  return (dp.slice(low, high + 1).reduce((a, b) => a + b, 0) % MOD)
}

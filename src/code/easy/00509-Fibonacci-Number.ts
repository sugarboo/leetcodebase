function fibRecursively(n: number): number {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

function fibDp(n: number): number {
  const dp: number[] = [0, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

export function fib(n: number): number {
  // return fibRecursively(n)
  return fibDp(n)
}

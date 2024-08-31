function climbStairs1(n: number): number {
  return n <= 2 ? n : climbStairs1(n - 1) + climbStairs1(n - 2)
}

export function climbStairs(n: number): number {
  return climbStairs1(n)
}

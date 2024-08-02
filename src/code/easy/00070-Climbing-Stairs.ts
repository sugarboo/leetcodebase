function climbStairs1(n: number): number {
  // return n <= 2 ? n : climbStairs1(n - 1) + climbStairs1(n - 2)
  /* Because climbStairs1(n - 1) = climbStairs1(n - 2) + climbStairs1(n - 3s) */
  return n <= 3 ? n : 2 * climbStairs1(n - 2) + climbStairs1(n - 3)
}

export function climbStairs(n: number): number {
  return climbStairs1(n)
}

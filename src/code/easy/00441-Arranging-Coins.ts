export function arrangeCoins(n: number): number {
  let i = 0
  while (n > 0) {
    n -= ++i
    if (n < 0) {
      i--
    }
  }
  return i
}

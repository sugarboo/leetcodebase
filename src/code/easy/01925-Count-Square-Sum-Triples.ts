export function countTriples(n: number): number {
  let cnt = 0

  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      if (a === b) {
        continue
      }
      const c = Math.sqrt(a ** 2 + b ** 2)
      if (Number.isInteger(c) && c <= n) {
        // Count both (a, b, c) and (b, a, c)
        cnt += 2
      }
    }
  }

  return cnt
}

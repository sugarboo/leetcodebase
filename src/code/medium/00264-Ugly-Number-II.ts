export function nthUglyNumber(n: number): number {
  const uglies: number[] = Array.from({ length: n - 1 })
  uglies[0] = 1
  let p2 = 0
  let p3 = 0
  let p5 = 0

  for (let i = 1; i < n; i++) {
    const next = Math.min(uglies[p2] * 2, uglies[p3] * 3, uglies[p5] * 5)
    uglies[i] = next
    if (next % 2 === 0) {
      p2++
    }
    if (next % 3 === 0) {
      p3++
    }
    if (next % 5 === 0) {
      p5++
    }
  }

  return uglies[n - 1]
}

export function findJudge(n: number, trust: number[][]): number {
  const trustCount = Array.from<number>({ length: n + 1 }).fill(0)
  const trustedCount = Array.from<number>({ length: n + 1 }).fill(0)

  for (const [a, b] of trust) {
    trustCount[a]++
    trustedCount[b]++
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === 0 && trustedCount[i] === n - 1) {
      return i
    }
  }

  return -1
}

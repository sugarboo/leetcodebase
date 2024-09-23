function countBits1(n: number): number[] {
  const ans: number[] = []

  for (let i = 0; i <= n; i++) {
    ans.push(i.toString(2).replace(/[^1]/g, '').length)
  }

  return ans
}

function countBits2(n: number): number[] {
  const ans = Array.from<number>({ length: n + 1 }).fill(0)

  for (let i = 0; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1)
  }

  return ans
}

export function countBits(n: number): number[] {
  return countBits2(n)
}

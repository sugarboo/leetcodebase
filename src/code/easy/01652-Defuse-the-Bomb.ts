export function decrypt(code: number[], k: number): number[] {
  const n = code.length
  const sign = Math.sign(k)
  const ans: number[] = Array.from<number>({ length: n }).fill(0)

  code.forEach((_, i) => {
    let sum = 0

    for (let j = 1; j <= Math.abs(k); j++) {
      sum += code[(i + j * sign + (sign < 0 ? n : 0)) % n]
    }

    ans[i] = sum
  })

  return ans
}

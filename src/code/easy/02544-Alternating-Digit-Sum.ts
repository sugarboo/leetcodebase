export function alternateDigitSum(n: number): number {
  const digits = Array.from(`${n}`).map((d, i) => i % 2 === 0 ? Number(d) : Number(d) * -1)
  return digits.reduce((accu, curr) => accu + curr, 0)
}

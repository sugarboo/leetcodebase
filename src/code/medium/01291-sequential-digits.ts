export function sequentialDigits(low: number, high: number): number[] {
  const base = '123456789'
  const len = base.length
  const ans: number[] = []

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      const num = Number(base.substring(i, j))
      if (num >= low && num <= high) {
        ans.push(num)
      }
    }
  }

  return ans.sort((a, b) => a - b)
}

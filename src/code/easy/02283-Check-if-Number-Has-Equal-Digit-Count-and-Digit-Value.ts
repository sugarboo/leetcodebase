export function digitCount(num: string): boolean {
  const freq = new Map<number, number>()
  for (const char of num) {
    const digit = Number.parseInt(char)
    freq.set(digit, (freq.get(digit) ?? 0) + 1)
  }

  for (let i = 0; i < num.length; i++) {
    const digit = Number.parseInt(num[i])
    if (digit !== (freq.get(i) ?? 0)) {
      return false
    }
  }

  return true
}

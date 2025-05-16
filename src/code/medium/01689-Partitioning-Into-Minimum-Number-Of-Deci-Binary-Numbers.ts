export function minPartitions(n: string): number {
  let maxDigit = 0

  for (const char of n) {
    const digit = Number(char)
    if (digit > maxDigit) {
      maxDigit = digit
    }
  }

  return maxDigit
}

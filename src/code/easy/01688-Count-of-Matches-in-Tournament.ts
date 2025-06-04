export function numberOfMatches(n: number): number {
  let matches = 0

  while (n > 1) {
    const advanced = Math.floor(n / 2)
    matches += advanced
    n -= advanced
  }
  return matches
}

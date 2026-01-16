export function areOccurrencesEqual(s: string): boolean {
  const freq = new Map<string, number>()
  for (const c of s) {
    freq.set(c, (freq.get(c) ?? 0) + 1)
  }
  return new Set(freq.values()).size === 1
}
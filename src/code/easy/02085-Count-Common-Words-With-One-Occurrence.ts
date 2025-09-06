export function countWords(words1: string[], words2: string[]): number {
  const freq1 = new Map<string, number>()
  const freq2 = new Map<string, number>()

  for (const word of words1) {
    freq1.set(word, (freq1.get(word) || 0) + 1)
  }

  for (const word of words2) {
    freq2.set(word, (freq2.get(word) || 0) + 1)
  }

  let ans = 0

  for (const [word, cnt1] of freq1.entries()) {
    if (cnt1 === 1 && freq2.get(word) === 1) {
      ans++
    }
  }

  return ans
}

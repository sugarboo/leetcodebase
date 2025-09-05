export function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const freq = Array.from({ length: 26 }, () => 0)
  const base = 'a'.charCodeAt(0)
  for (const char of word1) {
    freq[char.charCodeAt(0) - base]++
  }
  for (const char of word2) {
    freq[char.charCodeAt(0) - base]--
  }
  return freq.every(cnt => Math.abs(cnt) <= 3)
}

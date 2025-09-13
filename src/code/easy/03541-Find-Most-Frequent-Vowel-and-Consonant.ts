export function maxFreqSum(s: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const freq = new Map<string, number>()
  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1)
  }

  let maxVowelCnt = 0
  let maxConsonantCnt = 0

  for (const [key, value] of freq.entries()) {
    if (vowels.includes(key)) {
      maxVowelCnt = Math.max(maxVowelCnt, value)
    } else {
      maxConsonantCnt = Math.max(maxConsonantCnt, value)
    }
  }

  return maxVowelCnt + maxConsonantCnt
}

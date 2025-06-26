export function mergeAlternately(word1: string, word2: string): string {
  const len1 = word1.length
  const len2 = word2.length

  let ans = ''

  for (let i = 0; i < Math.max(len1, len2); i++) {
    if (i < len1) {
      ans += `${word1[i]}`
    }
    if (i < len2) {
      ans += `${word2[i]}`
    }
  }

  return ans
}

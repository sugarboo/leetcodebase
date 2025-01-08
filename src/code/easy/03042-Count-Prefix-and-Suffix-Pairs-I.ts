export function countPrefixSuffixPairs(words: string[]): number {
  const n = words.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        ans++
      }
    }
  }
  return ans
}

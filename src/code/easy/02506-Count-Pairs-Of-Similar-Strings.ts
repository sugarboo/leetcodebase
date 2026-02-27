export function similarPairs(words: string[]): number {
  words = words.map(word => Array.from(new Set(word)).sort().join(''))
  const n = words.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (words[i] === words[j]) {
        ans++
      }
    }
  }

  return ans
}

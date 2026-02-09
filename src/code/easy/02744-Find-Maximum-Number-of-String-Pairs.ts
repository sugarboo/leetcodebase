export function maximumNumberOfStringPairs(words: string[]): number {
  let ans = 0
  const seen = new Set<string>()
  for (const word of words) {
    if (seen.has(word.split('').reverse().join(''))) {
      ans++
    } else {
      seen.add(word)
    }
  }

  return ans
}

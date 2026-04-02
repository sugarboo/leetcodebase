export function vowelStrings(words: string[], left: number, right: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let ans = 0
  for (let i = left; i <= right; i++) {
    const word = words[i]
    const len = word.length
    if (len && vowels.has(word[0]) && vowels.has(word[len - 1])) {
      ans++
    }
  }

  return ans
}

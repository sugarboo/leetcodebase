export function wordSubsets(words1: string[], words2: string[]): string[] {
  // To calculate frequency of letters in a word
  const countLetters = (word: string) => {
    const count = Array.from<number>({ length: 26 }).fill(0)
    for (const char of word) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    return count
  }

  // Step 1: Calculate the maximum frequency requirements for words2
  const maxFreq = Array.from<number>({ length: 26 }).fill(0)
  for (const word of words2) {
    const freq = countLetters(word)
    for (let i = 0; i < 26; i++) {
      maxFreq[i] = Math.max(maxFreq[i], freq[i])
    }
  }

  // Step 2: Check each word in words1 against the maxFreq
  const result: string[] = []
  for (const word of words1) {
    const freq = countLetters(word)
    let isUniversal = true
    for (let i = 0; i < 26; i++) {
      if (freq[i] < maxFreq[i]) {
        isUniversal = false
        break
      }
    }
    if (isUniversal) {
      result.push(word)
    }
  }

  return result
}

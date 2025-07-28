export function makeEqual(words: string[]): boolean {
  const n = words.length
  const freq = new Map<string, number>()

  // Count the frequency of each letter in each word
  words.forEach((word) => {
    for (const letter of word) {
      freq.set(letter, (freq.get(letter) || 0) + 1)
    }
  })

  for (const cnt of freq.values()) {
    // If the frequency of a letter is not divisible by the number of words, return false
    if (cnt % n !== 0) {
      return false
    }
  }

  return true
}

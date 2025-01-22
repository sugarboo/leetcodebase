export function countCharacters(words: string[], chars: string): number {
  // Frequency map for each character in chars
  const charMap = new Map<string, number>()
  for (const char of chars) {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }

  let count = 0
  for (const word of words) {
    // Frequency map for each character in word
    const wordMap = new Map<string, number>()
    for (const char of word) {
      wordMap.set(char, (wordMap.get(char) || 0) + 1)
    }

    // Check if the word can be formed by chars
    let isValid = true
    for (const [char, count] of wordMap.entries()) {
      // If the character is not in chars or the count is greater than the count in chars, the word cannot be formed
      if ((charMap.get(char) || 0) < count) {
        isValid = false
        break
      }
    }

    // If the word can be formed, add its length to the count
    if (isValid) {
      count += word.length
    }
  }

  // Return the total length of all valid words
  return count
}

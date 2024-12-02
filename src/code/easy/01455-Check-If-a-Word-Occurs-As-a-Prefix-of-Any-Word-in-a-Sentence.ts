export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      // return the 1-indexed index
      return i + 1
    }
  }

  // None of words starts with searchWord, return -1
  return -1
}

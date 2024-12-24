export function commonChars(words: string[]): string[] {
  const result: string[] = []

  let [firstWord, ...restWords] = words
  const firstChars = firstWord.split('')
  while (firstChars.length > 0) {
    const char = firstChars.shift()!
    if (restWords.every(word => word.includes(char))) {
      result.push(char)
      restWords = restWords.map(word => word.replace(char, ''))
    }
  }

  return result
}

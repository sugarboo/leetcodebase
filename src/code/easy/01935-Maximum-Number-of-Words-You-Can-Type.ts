export function canBeTypedWords(text: string, brokenLetters: string): number {
  const words = text.split(' ')
  const availableWords = words.filter((word) => {
    for (const letter of brokenLetters) {
      if (word.includes(letter)) {
        return false
      }
    }
    return true
  })

  return availableWords.length
}

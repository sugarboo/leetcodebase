export function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedLetters = allowed.split('')
  const allowedWords: string[] = []

  words.forEach((word, i) => {
    let allowedWord = word
    allowedLetters.forEach((allowedLetter) => {
      const regex = new RegExp(allowedLetter, 'g')
      allowedWord = allowedWord.replace(regex, '')
    })
    if (!allowedWord) {
      allowedWords.push(words[i])
    }
  })

  return allowedWords.length
}

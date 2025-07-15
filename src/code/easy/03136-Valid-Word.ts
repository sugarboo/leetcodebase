export function isValid(word: string): boolean {
  const isDigit = (char: string) => {
    const charCode = char.charCodeAt(0)
    const start = '0'.charCodeAt(0)
    const end = '9'.charCodeAt(0)

    return charCode >= start && charCode <= end
  }

  const isLetter = (char: string) => {
    const charCode = char.toLocaleLowerCase().charCodeAt(0)
    const start = 'a'.charCodeAt(0)
    const end = 'z'.charCodeAt(0)

    return charCode >= start && charCode <= end
  }

  const vowels = ['a', 'e', 'i', 'o', 'u']
  const chars = word.toLocaleLowerCase().split('')
  // Contain only digits and english letters
  const filtered = chars.filter(char => isDigit(char) || isLetter(char))
  const letters = filtered.filter(char => isLetter(char))
  const consonants = letters.filter(letter => !vowels.includes(letter))

  // Contain at least 3 characters
  if (filtered.length < 3) {
    return false
  }
  // Contain only digits and english letters
  if (filtered.length !== word.length) {
    return false
  }
  // Contain at least 1 consonant and at least 1 vowel
  if (consonants.length === 0 || consonants.length === letters.length) {
    return false
  }

  return true
}

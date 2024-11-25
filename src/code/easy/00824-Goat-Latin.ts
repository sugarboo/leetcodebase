export function toGoatLatin(sentence: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const words = sentence.split(' ')

  const goatLatinWords = words.map((word, index) => {
    const [firstLetter, ...rest] = word
    if (vowels.includes(firstLetter.toLocaleLowerCase())) {
      word = `${word}ma`
    } else {
      word = `${rest.join('')}${firstLetter}ma`
    }

    return `${word}${'a'.repeat(index + 1)}`
  })

  return goatLatinWords.join(' ')
}

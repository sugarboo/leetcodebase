export function reverseVowels(s: string): string {
  const isVowel = (char: string): boolean => {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLocaleLowerCase())
  }

  const vowels = s.split('').filter(char => isVowel(char))
  const reversed = [...vowels].reverse()

  let vowelsIndex = 0
  return s.split('').map((char) => {
    if (isVowel(char)) {
      char = reversed[vowels.indexOf(char, vowelsIndex)]
      vowelsIndex++
    }
    return char
  }).join('')
}

export function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  const getNumericalValue = (str: string) => {
    const base = 'a'.charCodeAt(0)
    const letters = str.split('')
    const numerals = letters.map(letter => letter.charCodeAt(0) - base)
    return Number(numerals.join(''))
  }

  return getNumericalValue(firstWord) + getNumericalValue(secondWord) === getNumericalValue(targetWord)
}

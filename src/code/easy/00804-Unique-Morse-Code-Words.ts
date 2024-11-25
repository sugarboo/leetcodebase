const LETTER_TO_MORSE_CODE_LIST = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']

export function uniqueMorseRepresentations(words: string[]): number {
  const codes = words.map((word) => {
    let code = ''

    for (const letter of word) {
      code += LETTER_TO_MORSE_CODE_LIST[letter.charCodeAt(0) - 'a'.charCodeAt(0)]
    }

    return code
  })

  return Array.from(new Set(codes)).length
}

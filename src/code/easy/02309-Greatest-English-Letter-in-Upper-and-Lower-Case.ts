export function greatestLetter(s: string): string {
  const UPPER_AND_LOWER_CASE_ASCII_DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)

  const lowerCharCodeSet = new Set<number>()
  const upperCharCodeSet = new Set<number>()

  for (const char of s) {
    const charCode = char.charCodeAt(0)
    if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
      lowerCharCodeSet.add(charCode)
    } else if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
      upperCharCodeSet.add(charCode)
    }
  }

  let maxCharCode = 0
  for (const upperCharCode of upperCharCodeSet) {
    const lowerCharCode = upperCharCode + UPPER_AND_LOWER_CASE_ASCII_DIFF
    if (lowerCharCodeSet.has(lowerCharCode)) {
      maxCharCode = Math.max(maxCharCode, upperCharCode)
    }
  }

  return maxCharCode === 0
    ? ''
    : String.fromCharCode(maxCharCode)
}

export function reverseOnlyLetters(s: string): string {
  const isLetter = (s: string) => {
    const charCode = s.toLocaleLowerCase().charCodeAt(0)
    const start = 'a'.charCodeAt(0)
    const end = 'z'.charCodeAt(0)
    return charCode >= start && charCode <= end
  }

  // Convert string to array for mutable operations
  const chars = s.split('')

  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (!isLetter(chars[i])) {
      // Skip non-letters from the left
      i++
    } else if (!isLetter(chars[j])) {
      // Skip non-letters from the right
      j--
    } else {
      // Swap letters
      [chars[i], chars[j]] = [chars[j], chars[i]]
      i++
      j--
    }
  }

  // Convert array back to string
  return chars.join('')
}

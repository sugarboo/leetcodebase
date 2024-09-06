export function convertToTitle(columnNumber: number): string {
  let str = ''
  const base = 'A'.charCodeAt(0)

  while (columnNumber > 0) {
    // Digit number's index starts with 0, so column number needs to subtract 1
    const currentDigitNumber = (columnNumber - 1) % 26
    str = `${String.fromCharCode(currentDigitNumber + base)}${str}`
    columnNumber = Math.floor((columnNumber - currentDigitNumber) / 26)
  }

  return str
}

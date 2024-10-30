export function convertToBase7(num: number): string {
  // Handle zero case
  if (num === 0)
    return '0'

  // Negative check
  const sign = num < 0 ? '-' : ''
  num = Math.abs(num)
  let result = ''

  // Repeatedly get the remainder when num is divided by 7
  while (num > 0) {
    // Add the current digit in base-7 to the front of the result
    result = `${num % 7}${result}`
    num = Math.floor(num / 7)
  }

  return `${sign}${result}`
}

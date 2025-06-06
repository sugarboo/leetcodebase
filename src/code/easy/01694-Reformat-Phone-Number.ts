export function reformatNumber(number: string): string {
  number = number.replaceAll(/\D/g, '')

  const arr: string[] = []
  while (number.length > 0) {
    if (number.length > 4 || number.length === 3) {
      arr.push(number.slice(0, 3))
      number = number.slice(3)
    } else {
      arr.push(number.slice(0, 2))
      number = number.slice(2)
    }
  }

  return arr.join('-')
}

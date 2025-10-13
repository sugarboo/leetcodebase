export function largestInteger(num: number): number {
  const digits = `${num}`.split('').map(Number)
  const odds = digits.filter(digit => digit % 2 !== 0).sort((a, b) => b - a)
  const evens = digits.filter(digit => digit % 2 === 0).sort((a, b) => b - a)

  let index = 0
  let oddIndex = 0
  let evenIndex = 0
  while (index < digits.length) {
    if (digits[index] % 2 !== 0) {
      digits[index] = odds[oddIndex]
      oddIndex++
    } else {
      digits[index] = evens[evenIndex]
      evenIndex++
    }
    index++
  }

  return Number(digits.join(''))
}

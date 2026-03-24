export function splitNum(num: number): number {
  const digits = Array.from(num.toString()).sort((a, b) => Number(a) - Number(b))
  let num1 = ''
  let num2 = ''

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i]
    if (i % 2 === 0) {
      num1 += digit
    } else {
      num2 += digit
    }
  }

  return Number(num1) + Number(num2)
}

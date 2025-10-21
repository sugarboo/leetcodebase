export function removeDigit(number: string, digit: string): string {
  let ans = '0'

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const num = `${number.substring(0, i)}${number.substring(i + 1)}`
      if (num > ans) {
        ans = num
      }
    }
  }

  return ans
}

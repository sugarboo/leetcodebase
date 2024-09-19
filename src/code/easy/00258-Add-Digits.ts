export function addDigits(num: number): number {
  let str = `${num}`

  while (str.length > 1) {
    let res = 0
    for (const digit of str) {
      res += Number(digit)
    }
    str = `${res}`
  }

  return Number(str)
}

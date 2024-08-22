export function findComplement(num: number): number {
  const binaryStr = num.toString(2)
  let result = ''

  for (let i = 0; i < binaryStr.length; i++) {
    result += binaryStr[i] === '1' ? '0' : '1'
  }

  return Number.parseInt(result, 2)
}

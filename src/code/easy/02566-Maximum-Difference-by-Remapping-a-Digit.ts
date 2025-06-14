export function minMaxDifference(num: number): number {
  const str = num.toString()
  const digits = str.split('')

  const firstNonNine = digits.find(digit => digit !== '9') || '9'
  const firstNonZero = digits.find(digit => digit !== '0') || '0'

  const max = Number(str.replaceAll(firstNonNine, '9'))
  const min = Number(str.replaceAll(firstNonZero, '0'))

  return max - min
}

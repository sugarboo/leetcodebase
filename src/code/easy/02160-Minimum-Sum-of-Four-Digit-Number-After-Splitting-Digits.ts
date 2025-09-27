export function minimumSum(num: number): number {
  const digits = `${num}`.split('').sort((a, b) => Number(a) - Number(b))
  const num1 = Number(`${digits[0]}${digits[2]}`)
  const num2 = Number(`${digits[1]}${digits[3]}`)

  return num1 + num2
}
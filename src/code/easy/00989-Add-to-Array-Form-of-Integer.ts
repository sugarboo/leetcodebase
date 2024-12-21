export function addToArrayForm(num: number[], k: number): number[] {
  const addend = k.toString().split('').map(Number)
  const result: number[] = []
  let i = num.length - 1
  let j = addend.length - 1
  let carry = 0

  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? num[i] : 0
    const y = j >= 0 ? addend[j] : 0
    const sum = x + y + carry
    result.push(sum % 10)
    carry = Math.floor(sum / 10)
    i--
    j--
  }
  return result.reverse()
}

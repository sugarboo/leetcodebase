export function selfDividingNumbers(left: number, right: number): number[] {
  const canSelfDivide = (num: number): boolean => {
    const digits: string[] = num.toString().split('')
    return digits.every(digit => num % Number(digit) === 0)
  }

  const ans: number[] = []

  for (let i = left; i <= right; i++) {
    if (canSelfDivide(i)) {
      ans.push(i)
    }
  }

  return ans
}

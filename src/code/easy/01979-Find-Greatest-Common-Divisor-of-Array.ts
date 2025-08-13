export function findGCD(nums: number[]): number {
  const gcd = (a: number, b: number) => {
    if (a % b === 0) {
      return b
    }
    return gcd(b, a % b)
  }

  const max = Math.max(...nums)
  const min = Math.min(...nums)

  return gcd(max, min)
}

export function isPowerOfThree1(n: number): boolean {
  while (n !== 0 && n % 3 === 0) {
    n = Math.floor(n / 3)
  }

  return n === 1
}

export function isPowerOfThree2(n: number): boolean {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0
}

export function isPowerOfThree(n: number): boolean {
  return isPowerOfThree1(n)
}

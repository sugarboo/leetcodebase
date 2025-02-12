export function subtractProductAndSum(n: number): number {
  n = Math.abs(n)
  let product = 1
  let sum = 0

  while (n > 0) {
    const digit = n % 10
    n = Math.floor(n / 10)
    product *= digit
    sum += digit
  }

  return product - sum
}

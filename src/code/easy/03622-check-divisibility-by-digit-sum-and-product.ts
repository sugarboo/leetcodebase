export function checkDivisibility(n: number): boolean {
  let sum = 0
  let product = 1
  let x = n

  while (x) {
    const digit = x % 10
    sum += digit
    product *= digit
    x = Math.floor(x / 10)
  }

  return n % (sum + product) === 0
}
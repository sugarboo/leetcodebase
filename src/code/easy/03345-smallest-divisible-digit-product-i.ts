export function smallestNumber(n: number, t: number): number {
  while (!check(n, t)) {
    n++
  }

  return n
}

function check(n: number, t: number): boolean {
  let product = 1
  while (n > 0) {
    product *= n % 10
    n = Math.floor(n / 10)
    if (product === 0) {
      break
    }
  }
  return product % t === 0
}
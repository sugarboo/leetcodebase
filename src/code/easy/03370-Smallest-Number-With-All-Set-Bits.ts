export function smallestNumber(n: number): number {
  let x = 1
  while (x < n) {
    x = x * 2 + 1
  }
  return x
}

export function fillCups(amount: number[]): number {
  amount.sort((a, b) => a - b)
  const [x, y, z] = amount
  if (z > x + y) {
    return z
  } else {
    return Math.floor((x + y + z + 1) / 2)
  }
}
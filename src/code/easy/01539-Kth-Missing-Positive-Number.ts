export function findKthPositive(arr: number[], k: number): number {
  let num = 0

  while (k > 0) {
    num++
    if (!arr.includes(num)) {
      k--
    }
  }

  return num
}

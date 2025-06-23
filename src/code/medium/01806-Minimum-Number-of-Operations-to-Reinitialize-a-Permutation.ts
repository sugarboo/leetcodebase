export function reinitializePermutation(n: number): number {
  let count = 0
  let arr = Array.from({ length: n }, (_, i) => i)

  while (true) {
    count++
    arr = arr.map((_, i) => (i % 2 === 0 ? arr[i / 2] : arr[n / 2 + (i - 1) / 2]))

    if (arr.every((num, i) => num === i)) {
      break
    }
  }

  return count
}

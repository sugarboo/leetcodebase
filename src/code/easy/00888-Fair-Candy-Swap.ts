export function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const aliceTotal = aliceSizes.reduce((accu, curr) => accu + curr, 0)
  const bobTotal = bobSizes.reduce((accu, curr) => accu + curr, 0)
  const delta = (aliceTotal - bobTotal) / 2
  const bobSet = new Set(bobSizes)

  for (const x of aliceSizes) {
    const y = x - delta
    if (bobSet.has(y)) {
      return [x, y]
    }
  }

  return []
}

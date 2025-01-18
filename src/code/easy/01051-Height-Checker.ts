export function heightChecker(heights: number[]): number {
  let count = 0
  const expected = [...heights].sort((a, b) => a - b)
  heights.forEach((height, i) => {
    if (height !== expected[i]) {
      count++
    }
  })

  return count
}

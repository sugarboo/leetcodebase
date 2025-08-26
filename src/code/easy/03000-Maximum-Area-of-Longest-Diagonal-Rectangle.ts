export function areaOfMaxDiagonal(dimensions: number[][]): number {
  let ans = 0
  let maxDiagonal = 0

  for (const [l, w] of dimensions) {
    const diagonal = Math.sqrt(l ** 2 + w ** 2)
    const area = l * w
    if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > ans)) {
      maxDiagonal = diagonal
      ans = area
    }
  }

  return ans
}

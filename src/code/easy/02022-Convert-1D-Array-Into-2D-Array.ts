export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return []
  }

  const matrix: number[][] = Array(m).fill(0).map(() => Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = original[i * n + j]
    }
  }

  return matrix
}

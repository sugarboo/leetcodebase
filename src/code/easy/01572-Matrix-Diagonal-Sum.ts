export function diagonalSum(mat: number[][]): number {
  const n = mat.length

  let sum = 0

  for (let i = 0; i < n; i++) {
    // Add elements from primary diagonal
    sum += mat[i][i]
    // Add elements from secondary diagonal
    sum += mat[n - 1 - i][i]
  }

  // If n is odd, subtract the center element as its added twice
  if (n % 2 !== 0) {
    const center = Math.floor(n / 2)
    sum -= mat[center][center]
  }

  return sum
}

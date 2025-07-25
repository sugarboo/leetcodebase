export function findRotation(mat: number[][], target: number[][]) {
  // Rotate the matrix 4 times and check if it equals to the target
  for (let i = 0; i < 4; i++) {
    mat = rotateMatrix(mat)
    if (checkMatricesEqual(mat, target)) {
      return true
    }
  }
  return false
}

/**
 * Rotate the matrix 90 degrees clockwise
 *
 * @param mat - The matrix to rotate
 *
 * @returns The rotated matrix
 */
function rotateMatrix(mat: number[][]) {
  const res: number[][] = []
  const m = mat.length
  const n = mat[0]?.length

  for (let i = 0; i < n; i++) {
    // Create a new row for the rotated matrix
    res[i] = []
    for (let j = 0; j < m; j++) {
      // Add the element to the new row
      res[i].push(mat[j][i])
    }
    // Reverse the new row to get the correct order
    res[i].reverse()
  }

  return res
}

/**
 * Check if two matrices are equal
 *
 * @param mat1 - The first matrix
 * @param mat2 - The second matrix
 *
 * @returns True if the matrices are equal, false otherwise
 */
function checkMatricesEqual(mat1: number[][], mat2: number[][]) {
  const m = mat1.length
  if (m !== mat2.length) {
    return false
  }
  for (let i = 0; i < m; i++) {
    const n = mat1[i]?.length
    if (n !== mat2[i]?.length) {
      return false
    }
    for (let j = 0; j < n; j++) {
      if (mat1[i][j] !== mat2[i][j]) {
        return false
      }
    }
  }

  return true
}

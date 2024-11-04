export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const flatted = mat.flat()

  // Check if it's possible to reshape into r * c
  if (flatted.length !== r * c) {
    return mat
  }

  const result: number[][] = []
  for (let i = 0; i < flatted.length; i += c) {
    result.push(flatted.slice(i, i + c))
  }

  return result
}

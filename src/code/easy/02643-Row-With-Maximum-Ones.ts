export function rowAndMaximumOnes(mat: number[][]): number[] {
  let idx = 0
  let cnt = 0

  for (let i = 0; i < mat.length; i++) {
    const n = mat[i].filter(Boolean).length
    if (n > cnt) {
      cnt = n
      idx = i
    }
  }

  return [idx, cnt]
}

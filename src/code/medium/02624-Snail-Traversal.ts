// interface Array<T> {
//   snail: (rowsCount: number, colsCount: number) => number[][]
// }

export function snail(rowsCount: number, colsCount: number): number[][] {
  // Input Verify
  if (this.length !== rowsCount * colsCount) {
    return []
  } else {
    // Init the result matrix, get a 2D array fill by 0
    const result: number[][] = Array.from({ length: rowsCount }, () => Array(colsCount).fill(0))
    // Row's pointer, starts from 0, ends with rowsCount - 1
    let r = 0
    // Col's pointer, starts from 0, ends with colsCount - 1
    let c = 0

    for (let i = 0; i < this.length; i++) {
      result[Math.abs(r)][c] = this[i]
      // Move row's pointer
      r++
      if ((i + 1) % rowsCount === 0) {
        // Move col's pointer
        c++
        if (((i + 1) / rowsCount) % 2 === 0) {
          // reset row's pointer, start from the first row
          r = 0
        } else {
          // reset row's pointer, start from the last row
          r = (rowsCount - 1) * -1
        }
      }
    }

    return result
  }
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

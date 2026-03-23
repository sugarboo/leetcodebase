import { describe, expect, it } from 'vitest'
import { reverseSubmatrix } from '../../code/easy/03643-Flip-Square-Submatrix-Vertically'

describe('flip square submatrix vertically test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    const x = 1
    const y = 0
    const k = 3
    const result = reverseSubmatrix(grid, x, y, k)
    const expected = [[1, 2, 3, 4], [13, 14, 15, 8], [9, 10, 11, 12], [5, 6, 7, 16]]
    expect(result).toStrictEqual(expected)
  })
})

describe('flip square submatrix vertically test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[3, 4, 2, 3], [2, 3, 4, 2]]
    const x = 0
    const y = 2
    const k = 2
    const result = reverseSubmatrix(grid, x, y, k)
    const expected = [[3, 4, 4, 2], [2, 3, 2, 3]]
    expect(result).toStrictEqual(expected)
  })
})

describe('flip square submatrix vertically test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    const x = 1
    const y = 0
    const k = 3
    const result = reverseSubmatrix(grid, x, y, k)
    const expected = [[1, 2, 3, 4], [13, 14, 15, 8], [9, 10, 11, 12], [5, 6, 7, 16]]
    expect(result).toStrictEqual(expected)
  })
})

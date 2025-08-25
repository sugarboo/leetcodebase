import { describe, expect, it } from 'vitest'
import { findDiagonalOrder } from '../../code/medium/00498-Diagonal-Traverse'

describe('target sum test case 🥇', () => {
  it('should return the expected number', () => {
    const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const result = findDiagonalOrder(mat)
    const expected = [1, 2, 4, 7, 5, 3, 6, 8, 9]
    expect(result).toEqual(expected)
  })
})

describe('target sum test case 🥈', () => {
  it('should return the expected number', () => {
    const mat = [[1, 2], [3, 4]]
    const result = findDiagonalOrder(mat)
    const expected = [1, 2, 3, 4]
    expect(result).toEqual(expected)
  })
})

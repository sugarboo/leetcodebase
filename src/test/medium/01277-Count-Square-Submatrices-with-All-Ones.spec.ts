import { describe, expect, it } from 'vitest'
import { countSquares } from '../../code/medium/01277-Count-Square-Submatrices-with-All-Ones'

describe('count square submatrices with all ones test case 🥇', () => {
  it('should return the expected result', () => {
    const matrix = [[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]]
    const result = countSquares(matrix)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('count square submatrices with all ones test case 🥈', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 0, 1], [1, 1, 0], [1, 1, 0]]
    const result = countSquares(matrix)
    const expected = 7
    expect(result).toBe(expected)
  })
})

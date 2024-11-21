import { describe, expect, it } from 'vitest'
import { isToeplitzMatrix } from '../../code/easy/00766-Toeplitz-Matrix'

describe('toplitz matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
    const result = isToeplitzMatrix(matrix)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('toplitz matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 2], [2, 2]]
    const result = isToeplitzMatrix(matrix)
    const expected = false
    expect(result).toBe(expected)
  })
})

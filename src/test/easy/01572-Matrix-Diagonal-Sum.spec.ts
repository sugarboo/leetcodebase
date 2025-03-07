import { describe, expect, it } from 'vitest'
import { diagonalSum } from '../../code/easy/01572-Matrix-Diagonal-Sum'

describe('matrix diagonal sum test case 🥇', () => {
  it('should return the expected result', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const result = diagonalSum(mat)
    const expected = 25
    expect(result).toBe(expected)
  })
})

describe('matrix diagonal sum test case 🥈', () => {
  it('should return the expected result', () => {
    const mat = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
    const result = diagonalSum(mat)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('matrix diagonal sum test case 🥉', () => {
  it('should return the expected result', () => {
    const mat = [[5]]
    const result = diagonalSum(mat)
    const expected = 5
    expect(result).toBe(expected)
  })
})

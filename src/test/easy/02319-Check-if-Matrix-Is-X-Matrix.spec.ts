import { describe, expect, it } from 'vitest'
import { checkXMatrix } from '../../code/easy/02319-Check-if-Matrix-Is-X-Matrix'

describe('check x matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]
    const result = checkXMatrix(grid)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check x matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[5, 7, 0], [0, 3, 1], [0, 5, 0]]
    const result = checkXMatrix(grid)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check x matrix test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]
    const result = checkXMatrix(grid)
    const expected = true
    expect(result).toBe(expected)
  })
})

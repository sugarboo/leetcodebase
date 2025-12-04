import { describe, expect, it } from 'vitest'
import { largestLocal } from '../../code/easy/02373-Largest-Local-Values-in-a-Matrix'

describe('largest local values in a matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]
    const result = largestLocal(grid)
    const expected = [[9, 9], [8, 6]]
    expect(result).toStrictEqual(expected)
  })
})

describe('largest local values in a matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
    const result = largestLocal(grid)
    const expected = [[2, 2, 2], [2, 2, 2], [2, 2, 2]]
    expect(result).toStrictEqual(expected)
  })
})

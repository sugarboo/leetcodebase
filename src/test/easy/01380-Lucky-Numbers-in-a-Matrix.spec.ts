import { describe, expect, it } from 'vitest'
import { luckyNumbers } from '../../code/easy/01380-Lucky-Numbers-in-a-Matrix'

describe('lucky numbers in a matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const matrix = [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ]
    const result = luckyNumbers(matrix)
    const expected = [15]
    expect(result).toEqual(expected)
  })
})

describe('lucky numbers in a matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]
    const result = luckyNumbers(matrix)
    const expected = [12]
    expect(result).toEqual(expected)
  })
})

describe('lucky numbers in a matrix test case 🥉', () => {
  it('should return the expected result', () => {
    const matrix = [[7, 8], [1, 2]]
    const result = luckyNumbers(matrix)
    const expected = [7]
    expect(result).toEqual(expected)
  })
})

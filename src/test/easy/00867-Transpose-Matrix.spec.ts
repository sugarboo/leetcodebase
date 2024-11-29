import { describe, expect, it } from 'vitest'
import { transpose } from '../../code/easy/00867-Transpose-Matrix'

describe('transpose matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const result = transpose(matrix)
    const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
    expect(result).toStrictEqual(expected)
  })
})

describe('transpose matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 2, 3], [4, 5, 6]]
    const result = transpose(matrix)
    const expected = [[1, 4], [2, 5], [3, 6]]
    expect(result).toStrictEqual(expected)
  })
})

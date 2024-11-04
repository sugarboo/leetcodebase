import { describe, expect, it } from 'vitest'
import { matrixReshape } from '../../code/easy/00566-Reshape-the-Matrix'

describe('reshape the matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const mat = [[1, 2], [3, 4]]
    const result = matrixReshape(mat, 1, 4)
    const expected = [[1, 2, 3, 4]]
    expect(result).toStrictEqual(expected)
  })
})

describe('reshape the matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const mat = [[1, 2], [3, 4]]
    const result = matrixReshape(mat, 2, 4)
    const expected = [[1, 2], [3, 4]]
    expect(result).toStrictEqual(expected)
  })
})

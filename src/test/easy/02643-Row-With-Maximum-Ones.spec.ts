import { describe, expect, it } from 'vitest'
import { rowAndMaximumOnes } from '../../code/easy/02643-Row-With-Maximum-Ones'

describe('row with maximum ones test case 🥇', () => {
  it('should return the expected array', () => {
    const mat = [[0, 1], [1, 0]]
    const result = rowAndMaximumOnes(mat)
    const expected = [0, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('row with maximum ones test case 🥈', () => {
  it('should return the expected array', () => {
    const mat = [[0, 0, 0], [0, 1, 1]]
    const result = rowAndMaximumOnes(mat)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('row with maximum ones test case 🥉', () => {
  it('should return the expected array', () => {
    const mat = [[0, 0], [1, 1], [0, 0]]
    const result = rowAndMaximumOnes(mat)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('row with maximum ones test case 🏅', () => {
  it('should return the expected array', () => {
    const mat = [[0], [0]]
    const result = rowAndMaximumOnes(mat)
    const expected = [0, 0]
    expect(result).toStrictEqual(expected)
  })
})

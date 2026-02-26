import { describe, expect, it } from 'vitest'
import { deleteGreatestValue } from '../../code/easy/02500-Delete-Greatest-Value-in-Each-Row'

describe('delete greatest value in each row test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2, 4], [3, 3, 1]]
    const result = deleteGreatestValue(grid)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('delete greatest value in each row test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[10]]
    const result = deleteGreatestValue(grid)
    const expected = 10
    expect(result).toBe(expected)
  })
})

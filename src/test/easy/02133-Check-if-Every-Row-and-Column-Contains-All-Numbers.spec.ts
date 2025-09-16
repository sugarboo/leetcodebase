import { describe, expect, it } from 'vitest'
import { checkValid } from '../../code/easy/02133-Check-if-Every-Row-and-Column-Contains-All-Numbers'

describe('check valid test case 🥇', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 2, 3], [3, 1, 2], [2, 3, 1]]
    const result = checkValid(matrix)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check valid test case 🥈', () => {
  it('should return the expected result', () => {
    const matrix = [[1, 1, 1], [1, 2, 3], [1, 2, 3]]
    const result = checkValid(matrix)
    const expected = false
    expect(result).toBe(expected)
  })
})

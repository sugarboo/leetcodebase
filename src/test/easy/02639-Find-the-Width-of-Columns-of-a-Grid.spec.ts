import { describe, expect, it } from 'vitest'
import { findColumnWidth } from '../../code/easy/02639-Find-the-Width-of-Columns-of-a-Grid'

describe('find the width of columns of a grid test case 🥇', () => {
  it('should return the expected array', () => {
    const grid = [[1], [22], [333]]
    const result = findColumnWidth(grid)
    const expected = [3]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the width of columns of a grid test case 🥈', () => {
  it('should return the expected array', () => {
    const grid = [[-15, 1, 3], [15, 7, 12], [5, 6, -2]]
    const result = findColumnWidth(grid)
    const expected = [3, 1, 2]
    expect(result).toStrictEqual(expected)
  })
})

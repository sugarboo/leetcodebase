import { describe, expect, it } from 'vitest'
import { shiftGrid } from './../../code/easy/01260-Shift-2D-Grid'

describe('cells with odd values in a matrix test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const k = 1
    const result = shiftGrid(grid, k)
    const expected = [[9, 1, 2], [3, 4, 5], [6, 7, 8]]
    expect(result).toEqual(expected)
  })
})

describe('cells with odd values in a matrix test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]]
    const k = 4
    const result = shiftGrid(grid, k)
    const expected = [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]]
    expect(result).toEqual(expected)
  })
})

describe('cells with odd values in a matrix test case 🥉', () => {
  it('should return the expected result', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const k = 9
    const result = shiftGrid(grid, k)
    const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    expect(result).toEqual(expected)
  })
})

describe('cells with odd values in a matrix test case 🏅', () => {
  it('should return the expected result', () => {
    const grid = [[1], [2], [3], [4], [7], [6], [5]]
    const k = 23
    const result = shiftGrid(grid, k)
    const expected = [[6], [5], [1], [2], [3], [4], [7]]
    expect(result).toEqual(expected)
  })
})

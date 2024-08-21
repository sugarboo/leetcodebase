import { describe, expect, it } from 'vitest'
import { snail } from '../../code/medium/02624-Snail-Traversal'

describe('snail traversal test case 🥇', () => {
  it('should return the expected matrix', () => {
    const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
    const rowsCount = 5
    const colsCount = 4
    const result = snail.call(nums, rowsCount, colsCount)
    const expected = [
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ]
    expect(result).toStrictEqual(expected)
  })
})

describe('snail traversal test case 🥈', () => {
  it('should return the expected matrix', () => {
    const nums = [1, 2, 3, 4]
    const rowsCount = 1
    const colsCount = 4
    const result = snail.call(nums, rowsCount, colsCount)
    const expected = [[1, 2, 3, 4]]
    expect(result).toStrictEqual(expected)
  })
})

describe('snail traversal test case 🥉', () => {
  it('should return the expected matrix', () => {
    const nums = [1, 3]
    const rowsCount = 2
    const colsCount = 2
    const result = snail.call(nums, rowsCount, colsCount)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

describe('snail traversal test case 🏅', () => {
  it('should return the expected matrix', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const rowsCount = 6
    const colsCount = 3
    const result = snail.call(nums, rowsCount, colsCount)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

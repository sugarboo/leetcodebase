import { describe, expect, it } from 'vitest'
import { findMissingAndRepeatedValues } from '../../code/easy/02965-Find-Missing-and-Repeated-Values'

describe('find missing and repeated values test case 🥇', () => {
  it('should return the expected result', () => {
    const grid = [[1, 3], [2, 2]]
    const result = findMissingAndRepeatedValues(grid)
    const expected = [2, 4]
    expect(result).toEqual(expected)
  })
})

describe('find missing and repeated values test case 🥈', () => {
  it('should return the expected result', () => {
    const grid = [[9, 1, 7], [8, 9, 2], [3, 4, 6]]
    const result = findMissingAndRepeatedValues(grid)
    const expected = [9, 5]
    expect(result).toEqual(expected)
  })
})

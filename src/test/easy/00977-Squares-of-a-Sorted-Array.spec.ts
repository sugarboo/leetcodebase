import { describe, expect, it } from 'vitest'
import { sortedSquares } from '../../code/easy/00977-Squares-of-a-Sorted-Array'

describe('squares of a sorted array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [-4, -1, 0, 3, 10]
    const result = sortedSquares(nums)
    const expected = [0, 1, 9, 16, 100]
    expect(result).toEqual(expected)
  })
})

describe('squares of a sorted array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-7, -3, 2, 3, 11]
    const result = sortedSquares(nums)
    const expected = [4, 9, 9, 49, 121]
    expect(result).toEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { findShortestSubArray } from '../../code/easy/00697-Degree-of-an-Array'

describe('degree of an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 3, 1]
    const result = findShortestSubArray(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('degree of an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 3, 1, 4, 2]
    const result = findShortestSubArray(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

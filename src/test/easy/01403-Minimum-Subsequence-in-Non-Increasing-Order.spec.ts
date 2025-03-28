import { describe, expect, it } from 'vitest'
import { minSubsequence } from '../../code/easy/01403-Minimum-Subsequence-in-Non-Increasing-Order'

describe('minimum subsequence in non-increasing order test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [4, 3, 10, 9, 8]
    const result = minSubsequence(arr)
    const expected = [10, 9]
    expect(result).toEqual(expected)
  })
})

describe('minimum subsequence in non-increasing order test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [4, 4, 7, 6, 7]
    const result = minSubsequence(arr)
    const expected = [7, 7, 6]
    expect(result).toEqual(expected)
  })
})

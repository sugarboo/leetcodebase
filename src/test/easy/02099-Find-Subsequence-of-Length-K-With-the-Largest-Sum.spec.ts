import { describe, expect, it } from 'vitest'
import { maxSubsequence } from '../../code/easy/02099-Find-Subsequence-of-Length-K-With-the-Largest-Sum'

describe('find subsequence of length k with the largest sum test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 3, 3]
    const k = 2
    const result = maxSubsequence(nums, k)
    const expected = [3, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('find subsequence of length k with the largest sum test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-1, -2, 3, 4]
    const k = 3
    const result = maxSubsequence(nums, k)
    const expected = [-1, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('find subsequence of length k with the largest sum test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 4, 3, 3]
    const k = 2
    const result = maxSubsequence(nums, k)
    const expected = [3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('find subsequence of length k with the largest sum test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [50, -75]
    const k = 2
    const result = maxSubsequence(nums, k)
    const expected = [50, -75]
    expect(result).toStrictEqual(expected)
  })
})

describe('find subsequence of length k with the largest sum test case 🏆', () => {
  it('should return the expected result', () => {
    const nums = [-16, -13, 8, 16, 35, -17, 30, -8, 34, -2, -29, -35, 15, 13, -30, -34, 6, 15, 28, -23, 34, 28, -24, 15, -17, 10, 31, 32, -3, -36, 19, 31, -5, -21, -33, -18, -23, -37, -15, 12, -28, -40, 1, 38, 38, -38, 33, -35, -28, -40, 4, -15, -29, -33, -18, -9, -29, 20, 1, 36, -8, 23, -34, 16, -7, 13, 39, 38, 7, -7, -10, 30, 9, 26, 27, -37, -18, -25, 14, -36, 23, 28, -15, 35, -9, 1]
    const k = 8
    const result = maxSubsequence(nums, k)
    const expected = [35, 34, 38, 38, 36, 39, 38, 35]
    expect(result).toStrictEqual(expected)
  })
})

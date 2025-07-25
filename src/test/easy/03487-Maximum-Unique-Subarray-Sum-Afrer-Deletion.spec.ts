import { describe, expect, it } from 'vitest'
import { maxSum } from '../../code/easy/03487-Maximum-Unique-Subarray-Sum-Afrer-Deletion'

describe('maximum unique subarray sum after deletion test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = maxSum(nums)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('maximum unique subarray sum after deletion test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 0, 1, 1]
    const result = maxSum(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('maximum unique subarray sum after deletion test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, -1, -2, 1, 0, -1]
    const result = maxSum(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum unique subarray sum after deletion test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [-100]
    const result = maxSum(nums)
    const expected = -100
    expect(result).toBe(expected)
  })
})

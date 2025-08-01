import { describe, expect, it } from 'vitest'
import { maxProductDifference } from '../../code/easy/01913-Maximum-Product-Difference-Between-Two-Pairs'

describe('maximum product difference between two pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [5, 6, 2, 7, 4]
    const result = maxProductDifference(nums)
    const expected = 34
    expect(result).toBe(expected)
  })
})

describe('maximum product difference between two pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 2, 5, 9, 7, 4, 8]
    const result = maxProductDifference(nums)
    const expected = 64
    expect(result).toBe(expected)
  })
})

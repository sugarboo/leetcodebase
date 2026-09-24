import { describe, expect, it } from 'vitest'
import { smallestIndex } from '../../code/easy/03550-smallest-index-with-digit-sum-equal-to-index'

describe('smallest index with digit sum equal to index test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 2]
    const result = smallestIndex(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('smallest index with digit sum equal to index test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 10, 11]
    const result = smallestIndex(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('smallest index with digit sum equal to index test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = smallestIndex(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})
import { describe, expect, it } from 'vitest'
import { sumCounts } from '../../code/easy/02913-subarrays-distinct-element-sum-of-squares-i'

describe('subarrays distinct element sum of squares i test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 1]
    const result = sumCounts(nums)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('subarrays distinct element sum of squares i test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1]
    const result = sumCounts(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

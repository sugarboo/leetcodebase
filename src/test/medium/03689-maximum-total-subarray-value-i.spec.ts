import { describe, expect, it } from 'vitest'
import { maxTotalValue } from '../../code/medium/03689-maximum-total-subarray-value-i'

describe('maximum total subarray value I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 2]
    const k = 2
    const result = maxTotalValue(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum total subarray value I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 2, 5, 1]
    const k = 3
    const result = maxTotalValue(nums, k)
    const expected = 12
    expect(result).toBe(expected)
  })
})

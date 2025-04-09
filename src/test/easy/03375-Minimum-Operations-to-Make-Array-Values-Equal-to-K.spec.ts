import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/easy/03375-Minimum-Operations-to-Make-Array-Values-Equal-to-K'

describe('minimum operations to make array values equal to K test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [5, 2, 5, 4, 5]
    const k = 2
    const result = minOperations(nums, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make array values equal to K test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 2]
    const k = 2
    const result = minOperations(nums, k)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make array values equal to K test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [9, 7, 5, 3]
    const k = 1
    const result = minOperations(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

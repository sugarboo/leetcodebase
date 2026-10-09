import { describe, expect, it } from 'vitest'
import { maxSum } from '../../code/easy/02815-max-pair-sum-in-an-array'

describe('max pair sum in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [112, 131, 411]
    const result = maxSum(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('max pair sum in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2536, 1613, 3366, 162]
    const result = maxSum(nums)
    const expected = 5902
    expect(result).toBe(expected)
  })
})

describe('max pair sum in an array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [51, 71, 17, 24, 42]
    const result = maxSum(nums)
    const expected = 88
    expect(result).toBe(expected)
  })
})
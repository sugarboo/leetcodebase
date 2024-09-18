import { describe, expect, it } from 'vitest'
import { largestNumber } from '../../code/medium/00179-Largest-Number'

describe('largest number test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [10, 2]
    const result = largestNumber(nums)
    const expected = '210'
    expect(result).toBe(expected)
  })
})

describe('largest number test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [3, 30, 34, 5, 9]
    const result = largestNumber(nums)
    const expected = '9534330'
    expect(result).toBe(expected)
  })
})

describe('largest number test case 🥉', () => {
  it('should return the expected number', () => {
    const nums = [0, 0]
    const result = largestNumber(nums)
    const expected = '0'
    expect(result).toBe(expected)
  })
})

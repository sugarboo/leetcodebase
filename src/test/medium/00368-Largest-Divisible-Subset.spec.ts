import { describe, expect, it } from 'vitest'
import { largestDivisibleSubset } from '../../code/medium/00368-Largest-Divisible-Subset'

describe('largest divisible subset test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 3]
    const result = largestDivisibleSubset(nums)
    const expected = [1, 2]
    expect(result).toEqual(expected)
  })
})

describe('largest divisible subset test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 4, 8]
    const result = largestDivisibleSubset(nums)
    const expected = [1, 2, 4, 8]
    expect(result).toEqual(expected)
  })
})

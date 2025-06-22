import { describe, expect, it } from 'vitest'
import { sumOfUnique } from '../../code/easy/01748-Sum-of-Unique-Elements'

describe('sum of unique elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 2]
    const result = sumOfUnique(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('sum of unique elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1, 1]
    const result = sumOfUnique(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('sum of unique elements test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = sumOfUnique(nums)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('sum of unique elements test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const result = sumOfUnique(nums)
    const expected = 120
    expect(result).toBe(expected)
  })
})

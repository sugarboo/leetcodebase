import { describe, expect, it } from 'vitest'
import { smallestEqual } from '../../code/easy/02057-Smallest-Index-With-Equal-Value'

describe('smallest index with equal value test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 2]
    const result = smallestEqual(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('smallest index with equal value test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 3, 2, 1]
    const result = smallestEqual(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('smallest index with equal value test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const result = smallestEqual(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { smallestRangeI } from '../../code/easy/00908-Smallest-Range-I'

describe('smallest range I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const k = 0
    const result = smallestRangeI(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('smallest range I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0, 10]
    const k = 2
    const result = smallestRangeI(nums, k)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('smallest range I test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 6]
    const k = 3
    const result = smallestRangeI(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

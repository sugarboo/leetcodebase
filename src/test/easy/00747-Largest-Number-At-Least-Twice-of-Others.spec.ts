import { describe, expect, it } from 'vitest'
import { dominantIndex } from '../../code/easy/00747-Largest-Number-At-Least-Twice-of-Others'

describe('largest number at least twice of others test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 6, 1, 0]
    const result = dominantIndex(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('largest number at least twice of others test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = dominantIndex(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('largest number at least twice of others test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0, 0, 0, 1]
    const result = dominantIndex(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

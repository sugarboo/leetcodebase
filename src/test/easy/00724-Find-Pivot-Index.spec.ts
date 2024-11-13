import { describe, expect, it } from 'vitest'
import { pivotIndex } from '../../code/easy/00724-Find-Pivot-Index'

describe('find pivot index test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 7, 3, 6, 5, 6]
    const result = pivotIndex(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('find pivot index test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = pivotIndex(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('find pivot index test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, -1]
    const result = pivotIndex(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

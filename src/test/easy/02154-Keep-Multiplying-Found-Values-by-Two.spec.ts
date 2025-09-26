import { describe, expect, it } from 'vitest'
import { findFinalValue } from '../../code/easy/02154-Keep-Multiplying-Found-Values-by-Two'

describe('keep multiplying found values by two test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [5, 3, 6, 1, 12]
    const original = 3
    const result = findFinalValue(nums, original)
    const expected = 24
    expect(result).toBe(expected)
  })
})

describe('keep multiplying found values by two test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 7, 9]
    const original = 4
    const result = findFinalValue(nums, original)
    const expected = 4
    expect(result).toBe(expected)
  })
})

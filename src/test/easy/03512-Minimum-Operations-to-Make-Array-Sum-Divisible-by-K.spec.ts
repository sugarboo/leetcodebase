import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/easy/03512-Minimum-Operations-to-Make-Array-Sum-Divisible-by-K'

describe('minimum operations to make array sum divisible by k test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 9, 7]
    const k = 5
    const result = minOperations(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make array sum divisible by k test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 1, 3]
    const k = 4
    const result = minOperations(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make array sum divisible by k test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 2]
    const k = 6
    const result = minOperations(nums, k)
    const expected = 5
    expect(result).toBe(expected)
  })
})

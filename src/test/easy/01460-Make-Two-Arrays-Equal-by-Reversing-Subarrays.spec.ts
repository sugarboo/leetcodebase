import { describe, expect, it } from 'vitest'
import { canBeEqual } from '../../code/easy/01460-Make-Two-Arrays-Equal-by-Reversing-Subarrays'

describe('make two arrays equal by reversing arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const target = [1, 2, 3, 4]
    const arr = [2, 4, 1, 3]
    const expected = true
    expect(canBeEqual(target, arr)).toBe(expected)
  })
})

describe('make two arrays equal by reversing arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const target = [7]
    const arr = [7]
    const expected = true
    expect(canBeEqual(target, arr)).toBe(expected)
  })
})

describe('make two arrays equal by reversing arrays test case 🥉', () => {
  it('should return the expected result', () => {
    const target = [3, 7, 9]
    const arr = [3, 7, 11]
    const expected = false
    expect(canBeEqual(target, arr)).toBe(expected)
  })
})

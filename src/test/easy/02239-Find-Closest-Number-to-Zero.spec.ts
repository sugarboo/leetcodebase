import { describe, expect, it } from 'vitest'
import { findClosestNumber } from '../../code/easy/02239-Find-Closest-Number-to-Zero'

describe('find closest number to zero test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [-4, -2, 1, 4, 8]
    const result = findClosestNumber(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find closest number to zero test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, -1, 1]
    const result = findClosestNumber(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find closest number to zero test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [-100000, -100000]
    const result = findClosestNumber(nums)
    const expected = -100000
    expect(result).toBe(expected)
  })
})

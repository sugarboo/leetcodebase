import { describe, expect, it } from 'vitest'
import { minCapability } from '../../code/medium/02560-House-Robber-IV'

describe('house Robber IV test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const k = 3
    const result = minCapability(nums, k)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('house Robber IV test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 5, 9]
    const k = 2
    const result = minCapability(nums, k)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('house Robber IV test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 7, 9, 3, 1]
    const k = 2
    const result = minCapability(nums, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

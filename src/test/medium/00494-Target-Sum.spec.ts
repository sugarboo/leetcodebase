import { describe, expect, it } from 'vitest'
import { findTargetSumWays } from '../../code/medium/00494-Target-Sum'

describe('target sum test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 1, 1, 1, 1]
    const target = 3
    const result = findTargetSumWays(nums, target)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('target sum test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [1]
    const target = 1
    const result = findTargetSumWays(nums, target)
    const expected = 1
    expect(result).toBe(expected)
  })
})

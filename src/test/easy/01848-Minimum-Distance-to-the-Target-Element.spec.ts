import { describe, expect, it } from 'vitest'
import { getMinDistance } from '../../code/easy/01848-Minimum-Distance-to-the-Target-Element'

describe('minimum distance to the target element test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const target = 5
    const start = 3
    const result = getMinDistance(nums, target, start)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum distance to the target element test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const target = 1
    const start = 0
    const result = getMinDistance(nums, target, start)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('minimum distance to the target element test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const target = 1
    const start = 0
    const result = getMinDistance(nums, target, start)
    const expected = 0
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countPairs } from '../../code/easy/02824-count-pairs-whose-sum-is-less-than-target'

describe('count pairs whose sum is less than target test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [-1, 1, 2, 3, 1]
    const target = 2
    const result = countPairs(nums, target)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count pairs whose sum is less than target test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-6, 2, 5, -2, -7, -1, 3]
    const target = -2
    const result = countPairs(nums, target)
    const expected = 10
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countFairPairs } from '../../code/medium/02563-Count-the-Number-of-Fair-Pairs'

describe('count the number of fair pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 7, 4, 4, 5]
    const lower = 3
    const upper = 6
    const result = countFairPairs(nums, lower, upper)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('count the number of fair pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 7, 9, 2, 5]
    const lower = 11
    const upper = 11
    const result = countFairPairs(nums, lower, upper)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count the number of fair pairs test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0, 0, 0, 0, 0, 0]
    const lower = 0
    const upper = 0
    const result = countFairPairs(nums, lower, upper)
    const expected = 15
    expect(result).toBe(expected)
  })
})

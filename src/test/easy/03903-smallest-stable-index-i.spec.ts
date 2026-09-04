import { describe, expect, it } from 'vitest'
import { firstStableIndex } from '../../code/easy/03903-smallest-stable-index-i'

describe('smallest stable index i test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [5, 0, 1, 4]
    const k = 3
    const result = firstStableIndex(nums, k)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('smallest stable index i test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 1]
    const k = 1
    const result = firstStableIndex(nums, k)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('smallest stable index i test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0]
    const k = 0
    const result = firstStableIndex(nums, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { maximizeSum } from '../../code/easy/02656-maximum-sum-with-exactly-k-elements'

describe('maximum sum with exactly k elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = maximizeSum(nums, 3)
    const expected = 18
    expect(result).toBe(expected)
  })
})

describe('maximum sum with exactly k elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [5, 5, 5]
    const result = maximizeSum(nums, 2)
    const expected = 11
    expect(result).toBe(expected)
  })
})

describe('maximum sum with exactly k elements test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 5, 2, 1, 3, 1]
    const result = maximizeSum(nums, 3)
    const expected = 18
    expect(result).toBe(expected)
  })
})

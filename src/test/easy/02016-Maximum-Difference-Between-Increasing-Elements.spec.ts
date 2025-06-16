import { describe, expect, it } from 'vitest'
import { maximumDifference } from '../../code/easy/02016-Maximum-Difference-Between-Increasing-Elements'

describe('maximum difference between increasing elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [7, 1, 5, 4]
    const result = maximumDifference(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum difference between increasing elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [9, 4, 3, 2]
    const result = maximumDifference(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('maximum difference between increasing elements test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 5, 2, 10]
    const result = maximumDifference(nums)
    const expected = 9
    expect(result).toBe(expected)
  })
})

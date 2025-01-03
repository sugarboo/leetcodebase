import { describe, expect, it } from 'vitest'
import { waysToSplitArray } from '../../code/medium/02270-Number-of-Ways-to-Split-Array'

describe('number of ways to split array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [10, 4, -8, 7]
    const result = waysToSplitArray(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('number of ways to split array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 1, 0]
    const result = waysToSplitArray(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('number of ways to split array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [6, -1, 9]
    const result = waysToSplitArray(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

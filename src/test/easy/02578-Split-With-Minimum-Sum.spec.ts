import { describe, expect, it } from 'vitest'
import { splitNum } from '../../code/easy/02578-Split-With-Minimum-Sum'

describe('split with minimum sum test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = 4325
    const result = splitNum(nums)
    const expected = 59
    expect(result).toBe(expected)
  })
})

describe('split with minimum sum test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = 687
    const result = splitNum(nums)
    const expected = 75
    expect(result).toBe(expected)
  })
})

describe('split with minimum sum test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = 1029
    const result = splitNum(nums)
    const expected = 21
    expect(result).toBe(expected)
  })
})

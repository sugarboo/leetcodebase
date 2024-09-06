import { describe, expect, it } from 'vitest'
import { singleNumber } from '../../code/easy/00136-Single-Number'

describe('single number test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 1]
    const result = singleNumber(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('single number test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 1, 2, 1, 2]
    const result = singleNumber(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('single number test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const result = singleNumber(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { thirdMax } from '../../code/easy/00414-Third-Maximum-Number'

describe('third maximum number test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 1]
    const result = thirdMax(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('third maximum number test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2]
    const result = thirdMax(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('third maximum number test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 3, 1]
    const result = thirdMax(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

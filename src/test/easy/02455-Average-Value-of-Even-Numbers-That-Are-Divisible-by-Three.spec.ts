import { describe, expect, it } from 'vitest'
import { averageValue } from '../../code/easy/02455-Average-Value-of-Even-Numbers-That-Are-Divisible-by-Three'

describe('average value of even numbers that are disivisble by three test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 3, 6, 10, 12, 15]
    const result = averageValue(nums)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('average value of even numbers that are disivisble by three test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 4, 7, 10]
    const result = averageValue(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

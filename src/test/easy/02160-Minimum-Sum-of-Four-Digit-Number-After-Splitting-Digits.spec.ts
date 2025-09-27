import { describe, expect, it } from 'vitest'
import { minimumSum } from '../../code/easy/02160-Minimum-Sum-of-Four-Digit-Number-After-Splitting-Digits'

describe('minimum sum of four digit number after splitting digits test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 2932
    const result = minimumSum(num)
    const expected = 52
    expect(result).toBe(expected)
  })
})

describe('minimum sum of four digit number after splitting digits test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 4009
    const result = minimumSum(num)
    const expected = 13
    expect(result).toBe(expected)
  })
})

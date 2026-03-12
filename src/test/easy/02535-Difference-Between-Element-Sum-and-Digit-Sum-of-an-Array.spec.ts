import { describe, expect, it } from 'vitest'
import { differenceOfSum } from '../../code/easy/02535-Difference-Between-Element-Sum-and-Digit-Sum-of-an-Array'

describe('difference between element sum and digit sum of an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 15, 6, 3]
    const result = differenceOfSum(nums)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('difference between element sum and digit sum of an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = differenceOfSum(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

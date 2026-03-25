import { describe, expect, it } from 'vitest'
import { separateDigits } from '../../code/easy/02553-Separate-the-Digits-in-an-Array'

describe('separate the digits in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [13, 25, 83, 77]
    const result = separateDigits(nums)
    const expected = [1, 3, 2, 5, 8, 3, 7, 7]
    expect(result).toStrictEqual(expected)
  })
})

describe('separate the digits in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [7, 1, 3, 9]
    const result = separateDigits(nums)
    const expected = [7, 1, 3, 9]
    expect(result).toStrictEqual(expected)
  })
})

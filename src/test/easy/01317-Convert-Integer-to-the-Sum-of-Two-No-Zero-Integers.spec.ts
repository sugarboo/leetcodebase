import { describe, expect, it } from 'vitest'
import { getNoZeroIntegers } from './../../code/easy/01317-Convert-Integer-to-the-Sum-of-Two-No-Zero-Integers'

describe('convert integer to the sum of two no zero integers test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 26
    const result = getNoZeroIntegers(n)
    const expected = [1, 25]
    expect(result).toStrictEqual(expected)
  })
})

describe('convert integer to the sum of two no zero integers test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 11
    const result = getNoZeroIntegers(n)
    const expected = [2, 9]
    expect(result).toStrictEqual(expected)
  })
})

describe('convert integer to the sum of two no zero integers test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1010
    const result = getNoZeroIntegers(n)
    const expected = [11, 999]
    expect(result).toStrictEqual(expected)
  })
})

describe('convert integer to the sum of two no zero integers test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = getNoZeroIntegers(n)
    const expected = [1, 1]
    expect(result).toStrictEqual(expected)
  })
})

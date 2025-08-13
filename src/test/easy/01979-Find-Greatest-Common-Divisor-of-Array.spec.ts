import { describe, expect, it } from 'vitest'
import { findGCD } from '../../code/easy/01979-Find-Greatest-Common-Divisor-of-Array'

describe('find greatest common divisor of array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 5, 6, 9, 10]
    const result = findGCD(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find greatest common divisor of array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [7, 5, 6, 8, 3]
    const result = findGCD(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find greatest common divisor of array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 3]
    const result = findGCD(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

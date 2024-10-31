import { describe, expect, it } from 'vitest'
import { arrayPairSum } from '../../code/easy/00561-Array-Partition'

describe('array partition test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 4, 3, 2]
    const result = arrayPairSum(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('array partition test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [6, 2, 6, 5, 1, 2]
    const result = arrayPairSum(nums)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('array partition test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [6214, -2290, 2833, -7908]
    const result = arrayPairSum(nums)
    const expected = -5075
    expect(result).toBe(expected)
  })
})

describe('array partition test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [-470, 66, -4835, -5623]
    const result = arrayPairSum(nums)
    const expected = -6093
    expect(result).toBe(expected)
  })
})

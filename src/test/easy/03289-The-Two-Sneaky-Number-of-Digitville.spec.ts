import { describe, expect, it } from 'vitest'
import { getSneakyNumbers } from '../../code/easy/03289-The-Two-Sneaky-Number-of-Digitville'

describe('the two sneaky number of digitville test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 1, 0]
    const result = getSneakyNumbers(nums)
    const expected = [0, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('the two sneaky number of digitville test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0, 3, 2, 1, 3, 2]
    const result = getSneakyNumbers(nums)
    const expected = [3, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('the two sneaky number of digitville test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]
    const result = getSneakyNumbers(nums)
    const expected = [5, 4]
    expect(result).toStrictEqual(expected)
  })
})

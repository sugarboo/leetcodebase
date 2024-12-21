import { describe, expect, it } from 'vitest'
import { addToArrayForm } from '../../code/easy/00989-Add-to-Array-Form-of-Integer'

describe('add to array form of integer test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 0, 0]
    const result = addToArrayForm(nums, 34)
    const expected = [1, 2, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('add to array form of integer test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 7, 4]
    const result = addToArrayForm(nums, 181)
    const expected = [4, 5, 5]
    expect(result).toStrictEqual(expected)
  })
})

describe('add to array form of integer test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 5]
    const result = addToArrayForm(nums, 806)
    const expected = [1, 0, 2, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('add to array form of integer test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]
    const result = addToArrayForm(nums, 516)
    const expected = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9]
    expect(result).toStrictEqual(expected)
  })
})

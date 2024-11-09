import { describe, expect, it } from 'vitest'
import { findErrorNums } from '../../code/easy/00645-Set-Mismatch'

describe('set mismatch test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 4]
    const result = findErrorNums(nums)
    const expected = [2, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('set mismatch test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1]
    const result = findErrorNums(nums)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('set mismatch test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 2]
    const result = findErrorNums(nums)
    const expected = [2, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('set mismatch test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 3, 4, 6, 5]
    const result = findErrorNums(nums)
    const expected = [3, 1]
    expect(result).toStrictEqual(expected)
  })
})

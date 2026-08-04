import { describe, expect, it } from 'vitest'
import { findMissingElements } from '../../code/easy/03731-find-missing-elements'

describe('find missing elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 4, 2, 5]
    const result = findMissingElements(nums)
    const expected = [3]
    expect(result).toStrictEqual(expected)
  })
})

describe('find missing elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [7, 8, 6, 9]
    const result = findMissingElements(nums)
    const expected: number[] = []
    expect(result).toStrictEqual(expected)
  })
})

describe('find missing elements test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [5, 1]
    const result = findMissingElements(nums)
    const expected = [2, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

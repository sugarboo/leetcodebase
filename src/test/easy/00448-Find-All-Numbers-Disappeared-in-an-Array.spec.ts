import { describe, expect, it } from 'vitest'
import { findDisappearedNumbers } from '../../code/easy/00448-Find-All-Numbers-Disappeared-in-an-Array'

describe('find all numbers disappeared in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1]
    const result = findDisappearedNumbers(nums)
    const expected = [5, 6]
    expect(result).toStrictEqual(expected)
  })
})

describe('find all numbers disappeared in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1]
    const result = findDisappearedNumbers(nums)
    const expected = [2]
    expect(result).toStrictEqual(expected)
  })
})

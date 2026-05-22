import { describe, expect, it } from 'vitest'
import { distinctDifferenceArray } from '../../code/easy/02670-find-the-distinct-difference-array'

describe('find the distinct difference array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = distinctDifferenceArray(nums)
    const expected = [-3, -1, 1, 3, 5]
    expect(result).toStrictEqual(expected)
  })
})

describe('find the distinct difference array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 3, 4, 2]
    const result = distinctDifferenceArray(nums)
    const expected = [-2, -1, 0, 2, 3]
    expect(result).toStrictEqual(expected)
  })
})

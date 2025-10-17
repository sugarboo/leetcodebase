import { describe, expect, it } from 'vitest'
import { intersection } from '../../code/easy/02248-Intersection-of-Multiple-Arrays'

describe('intersection of multiple arrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]
    const result = intersection(nums)
    const expected = [3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('intersection of multiple arrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [[1, 2, 3], [4, 5, 6]]
    const result = intersection(nums)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

describe('intersection of multiple arrays test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [[7, 34, 45, 10, 12, 27, 13], [27, 21, 45, 10, 12, 13]]
    const result = intersection(nums)
    const expected = [10, 12, 13, 27, 45]
    expect(result).toStrictEqual(expected)
  })
})

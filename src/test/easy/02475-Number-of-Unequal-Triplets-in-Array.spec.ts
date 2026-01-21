import { describe, expect, it } from 'vitest'
import { unequalTriplets } from '../../code/easy/02475-Number-of-Unequal-Triplets-in-Array'

describe('number of unequal triplets in array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 4, 2, 4, 3]
    const result = unequalTriplets(nums)
    const expected = 3
    expect(result).toStrictEqual(expected)
  })
})

describe('number of unequal triplets in array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1, 1]
    const result = unequalTriplets(nums)
    const expected = 0
    expect(result).toStrictEqual(expected)
  })
})

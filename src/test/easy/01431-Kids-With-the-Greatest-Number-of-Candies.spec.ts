import { describe, expect, it } from 'vitest'
import { kidsWithCandies } from '../../code/easy/01431-Kids-With-the-Greatest-Number-of-Candies'

describe('kids with the greatest number of candies test case 🥇', () => {
  it('should return the expected result', () => {
    const candies = [2, 3, 5, 1, 3]
    const extraCandies = 3
    const result = kidsWithCandies(candies, extraCandies)
    const expected = [true, true, true, false, true]
    expect(result).toEqual(expected)
  })
})

describe('kids with the greatest number of candies test case 🥈', () => {
  it('should return the expected result', () => {
    const candies = [4, 2, 1, 1, 2]
    const extraCandies = 1
    const result = kidsWithCandies(candies, extraCandies)
    const expected = [true, false, false, false, false]
    expect(result).toEqual(expected)
  })
})

describe('kids with the greatest number of candies test case 🥉', () => {
  it('should return the expected result', () => {
    const candies = [12, 1, 12]
    const extraCandies = 10
    const result = kidsWithCandies(candies, extraCandies)
    const expected = [true, false, true]
    expect(result).toEqual(expected)
  })
})

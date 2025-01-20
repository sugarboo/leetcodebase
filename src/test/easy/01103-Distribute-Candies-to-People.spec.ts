import { describe, expect, it } from 'vitest'
import { distributeCandies } from '../../code/easy/01103-Distribute-Candies-to-People'

describe('distribute candies test case 🥇', () => {
  it('should return the expected result', () => {
    const candies = 7
    const num_people = 4
    const result = distributeCandies(candies, num_people)
    const expected = [1, 2, 3, 1]
    expect(result).toEqual(expected)
  })
})

describe('distribute candies test case 🥈', () => {
  it('should return the expected result', () => {
    const candies = 10
    const num_people = 3
    const result = distributeCandies(candies, num_people)
    const expected = [5, 2, 3]
    expect(result).toEqual(expected)
  })
})

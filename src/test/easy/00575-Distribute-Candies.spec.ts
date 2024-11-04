import { describe, expect, it } from 'vitest'
import { distributeCandies } from '../../code/easy/00575-Distribute-Candies'

describe('distribute candies test case 🥇', () => {
  it('should return the expected result', () => {
    const candyType = [1, 1, 2, 2, 3, 3]
    const result = distributeCandies(candyType)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('distribute candies test case 🥈', () => {
  it('should return the expected result', () => {
    const candyType = [1, 1, 2, 3]
    const result = distributeCandies(candyType)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('distribute candies test case 🥉', () => {
  it('should return the expected result', () => {
    const candyType = [6, 6, 6, 6]
    const result = distributeCandies(candyType)
    const expected = 1
    expect(result).toBe(expected)
  })
})

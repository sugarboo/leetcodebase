import { describe, expect, it } from 'vitest'
import { maximumCandies } from '../../code/medium/02226-Maximum-Candies-Allocated-to-K-Children'

describe('maximum candies allocated to k children test case 🥇', () => {
  it('should return the expected result', () => {
    const candies = [5, 8, 6]
    const k = 3
    const result = maximumCandies(candies, k)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum candies allocated to k children test case 🥈', () => {
  it('should return the expected result', () => {
    const candies = [2, 5, 7, 10]
    const k = 4
    const result = maximumCandies(candies, k)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum candies allocated to k children test case 🥉', () => {
  it('should return the expected result', () => {
    const candies = [2, 5]
    const k = 11
    const result = maximumCandies(candies, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

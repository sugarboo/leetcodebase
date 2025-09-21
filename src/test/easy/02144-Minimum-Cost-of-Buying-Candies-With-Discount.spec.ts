import { describe, expect, it } from 'vitest'
import { minimumCost } from '../../code/easy/02144-Minimum-Cost-of-Buying-Candies-With-Discount'

describe('minimum cost of buying candies with discount test case 🥇', () => {
  it('should return the expected result', () => {
    const cost = [1, 2, 3]
    const result = minimumCost(cost)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('minimum cost of buying candies with discount test case 🥈', () => {
  it('should return the expected result', () => {
    const cost = [6, 5, 7, 9, 2, 2]
    const result = minimumCost(cost)
    const expected = 23
    expect(result).toBe(expected)
  })
})

describe('minimum cost of buying candies with discount test case 🥉', () => {
  it('should return the expected result', () => {
    const cost = [5, 5]
    const result = minimumCost(cost)
    const expected = 10
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { maxIceCream } from '../../code/medium/01833-maximum-ice-cream-bars'

describe('maximum ice cream bars test case 🥇', () => {
  it('should return the expected result', () => {
    const costs = [1, 3, 2, 4, 1]
    const coins = 7
    const result = maxIceCream(costs, coins)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum ice cream bars test case 🥈', () => {
  it('should return the expected result', () => {
    const costs = [10, 6, 8, 7, 7, 8]
    const coins = 5
    const result = maxIceCream(costs, coins)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('maximum ice cream bars test case 🥉', () => {
  it('should return the expected result', () => {
    const costs = [1, 6, 3, 1, 2, 5]
    const coins = 20
    const result = maxIceCream(costs, coins)
    const expected = 6
    expect(result).toBe(expected)
  })
})

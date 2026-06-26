import { describe, expect, it } from 'vitest'
import { buyChoco } from '../../code/easy/02706-buy-two-chocolates'

describe('buy two chocolates test case 🥇', () => {
  it('should return the expected result', () => {
    const prices = [1, 2, 2]
    const money = 3
    const expected = 0
    const result = buyChoco(prices, money)
    expect(result).toBe(expected)
  })
})

describe('buy two chocolates test case 🥈', () => {
  it('should return the expected result', () => {
    const prices = [3, 2, 3]
    const money = 3
    const expected = 3
    const result = buyChoco(prices, money)
    expect(result).toBe(expected)
  })
})

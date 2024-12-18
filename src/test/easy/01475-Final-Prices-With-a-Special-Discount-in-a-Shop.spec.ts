import { describe, expect, it } from 'vitest'
import { finalPrices } from '../../code/easy/01475-Final-Prices-With-a-Special-Discount-in-a-Shop'

describe('final prices with a special discount in a shop test case 🥇', () => {
  it('should return the expected result', () => {
    const prices = [8, 4, 6, 2, 3]
    const result = finalPrices(prices)
    const expected = [4, 2, 4, 2, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('final prices with a special discount in a shop test case 🥈', () => {
  it('should return the expected result', () => {
    const prices = [1, 2, 3, 4, 5]
    const result = finalPrices(prices)
    const expected = [1, 2, 3, 4, 5]
    expect(result).toStrictEqual(expected)
  })
})

describe('final prices with a special discount in a shop test case 🥉', () => {
  it('should return the expected result', () => {
    const prices = [10, 1, 1, 6]
    const result = finalPrices(prices)
    const expected = [9, 0, 1, 6]
    expect(result).toStrictEqual(expected)
  })
})

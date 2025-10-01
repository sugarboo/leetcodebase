import { describe, expect, it } from 'vitest'
import { numWaterBottles } from '../../code/easy/01518-Water-Bottles'

describe('water bottles test case 🥇', () => {
  it('should return the expected result', () => {
    const numBottles = 9
    const numExchange = 3
    const result = numWaterBottles(numBottles, numExchange)
    const expected = 13
    expect(result).toBe(expected)
  })
})

describe('water bottles test case 🥈', () => {
  it('should return the expected result', () => {
    const numBottles = 15
    const numExchange = 4
    const result = numWaterBottles(numBottles, numExchange)
    const expected = 19
    expect(result).toBe(expected)
  })
})

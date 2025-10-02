import { describe, expect, it } from 'vitest'
import { maxBottlesDrunk } from '../../code/medium/03100-Water-Bottles-II'

describe('water bottles ii test case 🥇', () => {
  it('should return the expected result', async () => {
    const numBottles = 13
    const numExchange = 6
    const result = maxBottlesDrunk(numBottles, numExchange)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('water bottles ii test case 🥈', () => {
  it('should return the expected result', async () => {
    const numBottles = 10
    const numExchange = 3
    const result = maxBottlesDrunk(numBottles, numExchange)
    const expected = 13
    expect(result).toBe(expected)
  })
})

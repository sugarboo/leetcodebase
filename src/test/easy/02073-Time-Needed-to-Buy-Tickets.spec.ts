import { describe, expect, it } from 'vitest'
import { timeRequiredToBuy } from '../../code/easy/02073-Time-Needed-to-Buy-Tickets'

describe('time needed to buy tickets test case 🥇', () => {
  it('should return the expected result', () => {
    const tickets = [2, 3, 2]
    const k = 2
    const result = timeRequiredToBuy(tickets, k)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('time needed to buy tickets test case 🥈', () => {
  it('should return the expected result', () => {
    const tickets = [5, 1, 1, 1]
    const k = 0
    const result = timeRequiredToBuy(tickets, k)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('time needed to buy tickets test case 🥉', () => {
  it('should return the expected result', () => {
    const tickets = [3, 2, 2]
    const k = 2
    const result = timeRequiredToBuy(tickets, k)
    const expected = 6
    expect(result).toBe(expected)
  })
})

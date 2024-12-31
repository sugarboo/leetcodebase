import { describe, expect, it } from 'vitest'
import { mincostTickets } from '../../code/medium/00983-Minimum-Cost-For-Tickets'

describe('minimum cost for tickets test case 🥇', () => {
  it('should return the expected steps', () => {
    const days = [1, 4, 6, 7, 8, 20]
    const costs = [2, 7, 15]
    const result = mincostTickets(days, costs)
    const expected = 11
    expect(result).toBe(expected)
  })
})

describe('minimum cost for tickets test case 🥈', () => {
  it('should return the expected steps', () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]
    const costs = [2, 7, 15]
    const result = mincostTickets(days, costs)
    const expected = 17
    expect(result).toBe(expected)
  })
})

describe('minimum cost for tickets test case 🥉', () => {
  it('should return the expected steps', () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]
    const costs = [2, 7, 15]
    const result = mincostTickets(days, costs)
    const expected = 17
    expect(result).toBe(expected)
  })
})

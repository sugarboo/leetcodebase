import { describe, expect, it } from 'vitest'
import { bestHand } from '../../code/easy/02347-Best-Poker-Hand'

describe('best poker hand test case 🥇', () => {
  it('should return the expected result', () => {
    const ranks = [13, 2, 3, 1, 9]
    const suits = ['a', 'a', 'a', 'a', 'a']
    const result = bestHand(ranks, suits)
    const expected = 'Flush'
    expect(result).toBe(expected)
  })
})
describe('best poker hand test case 🥈', () => {
  it('should return the expected result', () => {
    const ranks = [4, 4, 2, 4, 4]
    const suits = ['d', 'a', 'a', 'b', 'c']
    const result = bestHand(ranks, suits)
    const expected = 'Three of a Kind'
    expect(result).toBe(expected)
  })
})
describe('best poker hand test case 🥉', () => {
  it('should return the expected result', () => {
    const ranks = [10, 10, 2, 12, 9]
    const suits = ['a', 'b', 'c', 'a', 'd']
    const result = bestHand(ranks, suits)
    const expected = 'Pair'
    expect(result).toBe(expected)
  })
})

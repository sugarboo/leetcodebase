import { describe, expect, it } from 'vitest'
import { stoneGame } from '../../code/medium/00877-stone-game'

describe('stone games test case 🥇', () => {
  it('should return the expected result', () => {
    const piles = [5, 3, 4, 5]
    const result = stoneGame(piles)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('stone games test case 🥈', () => {
  it('should return the expected result', () => {
    const piles = [3, 7, 2, 3]
    const result = stoneGame(piles)
    const expected = true
    expect(result).toBe(expected)
  })
})

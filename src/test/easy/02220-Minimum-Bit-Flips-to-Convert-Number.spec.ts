import { describe, expect, it } from 'vitest'
import { minBitFlips } from '../../code/easy/02220-Minimum-Bit-Flips-to-Convert-Number'

describe('minimum bit flips to convert number test case 🥇', () => {
  it('should return the expected number', () => {
    const start = 10
    const goal = 7
    const result = minBitFlips(start, goal)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum bit flips to convert number test case 🥈', () => {
  it('should return the expected number', () => {
    const start = 3
    const goal = 4
    const result = minBitFlips(start, goal)
    const expected = 3
    expect(result).toBe(expected)
  })
})

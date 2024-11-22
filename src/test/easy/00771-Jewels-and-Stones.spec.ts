import { describe, expect, it } from 'vitest'
import { numJewelsInStones } from '../../code/easy/00771-Jewels-and-Stones'

describe('jewels and stones test case 🥇', () => {
  it('should return the expected result', () => {
    const jewels = 'aA'
    const stones = 'aAAbbbb'
    const result = numJewelsInStones(jewels, stones)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('jewels and stones test case 🥈', () => {
  it('should return the expected result', () => {
    const jewels = 'z'
    const stones = 'ZZ'
    const result = numJewelsInStones(jewels, stones)
    const expected = 0
    expect(result).toBe(expected)
  })
})

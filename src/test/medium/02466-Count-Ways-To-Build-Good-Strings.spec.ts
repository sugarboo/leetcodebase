import { describe, expect, it } from 'vitest'
import { countGoodStrings } from '../../code/medium/02466-Count-Ways-To-Build-Good-Strings'

describe('count ways to build good strings test case 🥇', () => {
  it('should return the expected result', () => {
    const low = 3
    const high = 3
    const zero = 1
    const one = 1
    const result = countGoodStrings(low, high, zero, one)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('count ways to build good strings test case 🥈', () => {
  it('should return the expected result', () => {
    const low = 2
    const high = 3
    const zero = 1
    const one = 2
    const result = countGoodStrings(low, high, zero, one)
    const expected = 5
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { maxLengthBetweenEqualCharacters } from '../../code/easy/01624-Largest-Substring-between-Two-Equal-Characters'

describe('largest substring between two equal characters test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aa'
    const result = maxLengthBetweenEqualCharacters(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abca'
    const result = maxLengthBetweenEqualCharacters(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'cbzxy'
    const result = maxLengthBetweenEqualCharacters(s)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'aefghiabcda'
    const result = maxLengthBetweenEqualCharacters(s)
    const expected = 9
    expect(result).toBe(expected)
  })
})

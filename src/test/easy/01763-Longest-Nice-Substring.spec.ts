import { describe, expect, it } from 'vitest'
import { longestNiceSubstring } from '../../code/easy/01763-Longest-Nice-Substring'

describe('longest nice substring test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'YazaAay'
    const result = longestNiceSubstring(s)
    const expected = 'aAa'
    expect(result).toBe(expected)
  })
})

describe('longest nice substring test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'Bb'
    const result = longestNiceSubstring(s)
    const expected = 'Bb'
    expect(result).toBe(expected)
  })
})

describe('longest nice substring test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'c'
    const result = longestNiceSubstring(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

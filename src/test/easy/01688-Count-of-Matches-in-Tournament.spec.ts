import { describe, expect, it } from 'vitest'
import { numberOfMatches } from '../../code/easy/01688-Count-of-Matches-in-Tournament'

describe('count of matches in tournament test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 7
    const result = numberOfMatches(n)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('count of matches in tournament test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 14
    const result = numberOfMatches(n)
    const expected = 13
    expect(result).toBe(expected)
  })
})

describe('count of matches in tournament test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 16
    const result = numberOfMatches(n)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('count of matches in tournament test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 200
    const result = numberOfMatches(n)
    const expected = 199
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { countGoodSubstrings } from '../../code/easy/01876-Substrings-of-Size-Three-with-Distinct-Characters'

describe('substrings of size three with distinct characters test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'xyzzaz'
    const result = countGoodSubstrings(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('substrings of size three with distinct characters test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aababcabc'
    const result = countGoodSubstrings(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('substrings of size three with distinct characters test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abc'
    const result = countGoodSubstrings(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

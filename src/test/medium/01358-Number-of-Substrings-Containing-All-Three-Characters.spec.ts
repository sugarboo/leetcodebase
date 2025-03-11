import { describe, expect, it } from 'vitest'
import { numberOfSubstrings } from '../../code/medium/01358-Number-of-Substrings-Containing-All-Three-Characters'

describe('number of substrings containing all three characters test case 🥇', () => {
  it('should return the expected steps', () => {
    const s = 'abcabc'
    const result = numberOfSubstrings(s)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('number of substrings containing all three characters test case 🥈', () => {
  it('should return the expected steps', () => {
    const s = 'aaacb'
    const result = numberOfSubstrings(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('number of substrings containing all three characters test case 🥉', () => {
  it('should return the expected steps', () => {
    const s = 'abc'
    const result = numberOfSubstrings(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

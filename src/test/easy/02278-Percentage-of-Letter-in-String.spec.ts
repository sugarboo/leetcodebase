import { describe, expect, it } from 'vitest'
import { percentageLetter } from '../../code/easy/02278-Percentage-of-Letter-in-String'

describe('percentage of letter in string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'foobar'
    const result = percentageLetter(s, 'o')
    const expected = 33
    expect(result).toBe(expected)
  })
})

describe('percentage of letter in string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'jjjj'
    const result = percentageLetter(s, 'k')
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('percentage of letter in string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'aabab'
    const result = percentageLetter(s, 'b')
    const expected = 40
    expect(result).toBe(expected)
  })
})

describe('percentage of letter in string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'a'
    const result = percentageLetter(s, 'a')
    const expected = 100
    expect(result).toBe(expected)
  })
})

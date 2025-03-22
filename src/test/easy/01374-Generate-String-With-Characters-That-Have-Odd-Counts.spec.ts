import { describe, expect, it } from 'vitest'
import { generateTheString } from '../../code/easy/01374-Generate-String-With-Characters-That-Have-Odd-Counts'

describe('generate string with characters that have odd counts test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = generateTheString(n)
    const expected = 'aaab'
    expect(result).toBe(expected)
  })
})

describe('generate string with characters that have odd counts test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = generateTheString(n)
    const expected = 'ab'
    expect(result).toBe(expected)
  })
})

describe('generate string with characters that have odd counts test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 7
    const result = generateTheString(n)
    const expected = 'aaaaaaa'
    expect(result).toBe(expected)
  })
})

describe('generate string with characters that have odd counts test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 500
    const result = generateTheString(n)
    const expected = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
    expect(result).toBe(expected)
  })
})

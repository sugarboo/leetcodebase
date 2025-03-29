import { describe, expect, it } from 'vitest'
import { reformat } from '../../code/easy/01417-Reformat-The-String'

describe('reformat the string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'a0b1c2'
    const result = reformat(s)
    const expected = '0a1b2c'
    expect(result).toBe(expected)
  })
})

describe('reformat the string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'leetcode'
    const result = reformat(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

describe('reformat the string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '1229857369'
    const result = reformat(s)
    const expected = ''
    expect(result).toBe(expected)
  })
})

describe('reformat the string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'ab123'
    const result = reformat(s)
    const expected = '1a2b3'
    expect(result).toBe(expected)
  })
})

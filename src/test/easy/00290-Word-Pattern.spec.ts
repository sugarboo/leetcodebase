import { describe, expect, it } from 'vitest'
import { wordPattern } from '../../code/easy/00290-Word-Pattern'

describe('word pattern test case 🥇', () => {
  it('should return the expected result', () => {
    const pattern = 'abba'
    const s = 'dog cat cat dog'
    const result = wordPattern(pattern, s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('word pattern test case 🥈', () => {
  it('should return the expected result', () => {
    const pattern = 'abba'
    const s = 'dog cat cat fish'
    const result = wordPattern(pattern, s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('word pattern test case 🥉', () => {
  it('should return the expected result', () => {
    const pattern = 'aaaa'
    const s = 'dog cat cat dog'
    const result = wordPattern(pattern, s)
    const expected = false
    expect(result).toBe(expected)
  })
})

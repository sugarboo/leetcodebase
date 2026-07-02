import { describe, expect, it } from 'vitest'
import { minimizedStringLength } from '../../code/easy/02716-minimize-string-length'

describe('minimize string length test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aaabc'
    const result = minimizedStringLength(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimize string length test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'cbbd'
    const result = minimizedStringLength(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimize string length test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'baadccab'
    const result = minimizedStringLength(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

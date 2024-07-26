import { describe, expect, it } from 'vitest'
import { romanToInt } from '../../code/easy/00013-Roman-to-Integer'

describe('Roman to Integer Test Case 🥇', () => {
  it('should return the expected number', () => {
    const s = 'III'
    const expected = 3
    expect(romanToInt(s)).toBe(expected)
  })
})

describe('Roman to Integer Test Case 🥈', () => {
  it('should return the expected number', () => {
    const s = 'LVIII'
    const expected = 58
    expect(romanToInt(s)).toBe(expected)
  })
})

describe('Roman to Integer Test Case 🥉', () => {
  it('should return the expected number', () => {
    const s = 'MCMXCIV'
    const expected = 1994
    expect(romanToInt(s)).toBe(expected)
  })
})
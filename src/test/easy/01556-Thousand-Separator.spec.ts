import { describe, expect, it } from 'vitest'
import { thousandSeparator } from '../../code/easy/01556-Thousand-Separator'

describe('thousand separator test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 987
    const result = thousandSeparator(n)
    const expected = '987'
    expect(result).toBe(expected)
  })
})

describe('thousand separator test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 123456789
    const result = thousandSeparator(n)
    const expected = '123.456.789'
    expect(result).toBe(expected)
  })
})

describe('thousand separator test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1234
    const result = thousandSeparator(n)
    const expected = '1.234'
    expect(result).toBe(expected)
  })
})

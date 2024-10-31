import { describe, expect, it } from 'vitest'
import { detectCapitalUse } from '../../code/easy/00520-Detect-Capital'

describe('detect capital test case 🥇', () => {
  it('should return the expected number', () => {
    const word = 'USA'
    const result = detectCapitalUse(word)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('detect capital test case 🥈', () => {
  it('should return the expected number', () => {
    const word = 'FlaG'
    const result = detectCapitalUse(word)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('detect capital test case 🥉', () => {
  it('should return the expected number', () => {
    const word = 'Google'
    const result = detectCapitalUse(word)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('detect capital test case 🏅', () => {
  it('should return the expected number', () => {
    const word = 'x'
    const result = detectCapitalUse(word)
    const expected = true
    expect(result).toBe(expected)
  })
})

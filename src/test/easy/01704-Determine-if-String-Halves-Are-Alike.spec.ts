import { describe, expect, it } from 'vitest'
import { halvesAreAlike } from '../../code/easy/01704-Determine-if-String-Halves-Are-Alike'

describe('determine if string halves are alike test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'book'
    const result = halvesAreAlike(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('determine if string halves are alike test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'textbook'
    const result = halvesAreAlike(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('determine if string halves are alike test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'MerryChristmas'
    const result = halvesAreAlike(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('determine if string halves are alike test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'AbCdEfGh'
    const result = halvesAreAlike(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

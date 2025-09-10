import { describe, expect, it } from 'vitest'
import { checkString } from '../../code/easy/02124-Check-if-All-As-Appears-Before-All-Bs'

describe('check if all as appears before all bs test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aaabbb'
    const result = checkString(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if all as appears before all bs test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abab'
    const result = checkString(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if all as appears before all bs test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'bbb'
    const result = checkString(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if all as appears before all bs test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'a'
    const result = checkString(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if all as appears before all bs test case 🏆', () => {
  it('should return the expected result', () => {
    const s = 'b'
    const result = checkString(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { replaceDigits } from '../../code/easy/01844-Replace-All-Digits-with-Characters'

describe('replace all digits with characters test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'a1c1e1'
    const result = replaceDigits(s)
    const expected = 'abcdef'
    expect(result).toBe(expected)
  })
})

describe('replace all digits with characters test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'a1b2c3d4e'
    const result = replaceDigits(s)
    const expected = 'abbdcfdhe'
    expect(result).toBe(expected)
  })
})

describe('replace all digits with characters test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'a1b2c3d4e5f6g7h8i9j'
    const result = replaceDigits(s)
    const expected = 'abbdcfdhejflgnhpirj'
    expect(result).toBe(expected)
  })
})

describe('replace all digits with characters test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'abcdefghijklmnopqrstuvwxyz'
    const result = replaceDigits(s)
    const expected = 'abcdefghijklmnopqrstuvwxyz'
    expect(result).toBe(expected)
  })
})

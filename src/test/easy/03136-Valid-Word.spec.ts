import { describe, expect, it } from 'vitest'
import { isValid } from '../../code/easy/03136-Valid-Word'

describe('valid word test case 🥇', () => {
  it('should return the expected count', () => {
    const s = '234Adas'
    const expected = true
    expect(isValid(s)).toBe(expected)
  })
})

describe('valid word test case 🥈', () => {
  it('should return the expected count', () => {
    const s = 'b3'
    const expected = false
    expect(isValid(s)).toBe(expected)
  })
})

describe('valid word test case 🥉', () => {
  it('should return the expected count', () => {
    const s = 'a3$e'
    const expected = false
    expect(isValid(s)).toBe(expected)
  })
})

describe('valid word test case 🏅', () => {
  it('should return the expected count', () => {
    const s = 'aba'
    const expected = true
    expect(isValid(s)).toBe(expected)
  })
})

describe('valid word test case 🏆', () => {
  it('should return the expected count', () => {
    const s = '#zwI'
    const expected = false
    expect(isValid(s)).toBe(expected)
  })
})

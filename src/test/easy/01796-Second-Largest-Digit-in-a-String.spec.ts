import { describe, expect, it } from 'vitest'
import { secondHighest } from '../../code/easy/01796-Second-Largest-Digit-in-a-String'

describe('second largest digit in a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'dfa12321afd'
    const result = secondHighest(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('second largest digit in a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abc1111'
    const result = secondHighest(s)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('second largest digit in a string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abc'
    const result = secondHighest(s)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('second largest digit in a string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'ck077'
    const result = secondHighest(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('second largest digit in a string test case 🏆', () => {
  it('should return the expected result', () => {
    const s = '132518'
    const result = secondHighest(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { sumBase } from '../../code/easy/01837-Sum-of-Digits-in-Base-K'

describe('sum of digits in base k test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 34
    const k = 6
    const result = sumBase(n, k)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('sum of digits in base k test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 10
    const k = 10
    const result = sumBase(n, k)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('sum of digits in base k test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 42
    const k = 7
    const result = sumBase(n, k)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('sum of digits in base k test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 100
    const k = 10
    const result = sumBase(n, k)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('sum of digits in base k test case 🏆', () => {
  it('should return the expected result', () => {
    const n = 1000000000
    const k = 9
    const result = sumBase(n, k)
    const expected = 24
    expect(result).toBe(expected)
  })
})

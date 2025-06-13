import { describe, expect, it } from 'vitest'
import { totalMoney } from '../../code/easy/01716-Calculate-Money-in-Leetcode-Bank'

describe('calculate money in leetcode bank test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = totalMoney(n)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('calculate money in leetcode bank test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 10
    const result = totalMoney(n)
    const expected = 37
    expect(result).toBe(expected)
  })
})

describe('calculate money in leetcode bank test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 20
    const result = totalMoney(n)
    const expected = 96
    expect(result).toBe(expected)
  })
})

describe('calculate money in leetcode bank test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 1000
    const result = totalMoney(n)
    const expected = 74926
    expect(result).toBe(expected)
  })
})

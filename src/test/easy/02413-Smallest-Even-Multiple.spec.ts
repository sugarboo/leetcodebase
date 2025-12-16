import { describe, expect, it } from 'vitest'
import { smallestEvenMultiple } from '../../code/easy/02413-Smallest-Even-Multiple'

describe('smallest even multiple test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = smallestEvenMultiple(n)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('smallest even multiple test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 6
    const result = smallestEvenMultiple(n)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('smallest even multiple test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 149
    const result = smallestEvenMultiple(n)
    const expected = 298
    expect(result).toBe(expected)
  })
})

describe('smallest even multiple test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 150
    const result = smallestEvenMultiple(n)
    const expected = 150
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { fillCups } from '../../code/easy/02335-Minimum-Amount-of-Time-to-Fill-Cups'

describe('minimum amount of time to fill cups test case 🥇', () => {
  it('should return the expected result', () => {
    const amount = [1, 4, 2]
    const result = fillCups(amount)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum amount of time to fill cups test case 🥈', () => {
  it('should return the expected result', () => {
    const amount = [5, 4, 4]
    const result = fillCups(amount)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('minimum amount of time to fill cups test case 🥉', () => {
  it('should return the expected result', () => {
    const amount = [5, 0, 0]
    const result = fillCups(amount)
    const expected = 5
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { divisorGame } from '../../code/easy/01025-Divisor-Game'

describe('remove outer parentheses test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = divisorGame(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('divisor game test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 3
    const result = divisorGame(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('divisor game test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 999
    const result = divisorGame(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('divisor game test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 1000
    const result = divisorGame(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

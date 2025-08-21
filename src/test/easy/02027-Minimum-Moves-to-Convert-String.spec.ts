import { describe, expect, it } from 'vitest'
import { minimumMoves } from '../../code/easy/02027-Minimum-Moves-to-Convert-String'

describe('minimum moves to convert string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'XXX'
    const result = minimumMoves(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum moves to convert string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'XXOX'
    const result = minimumMoves(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum moves to convert string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'OOOO'
    const result = minimumMoves(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('minimum moves to convert string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'XXXOXOXOXXXXXXOOOOOOOOOXOXOXXXXXXXXXXXXXOO'
    const result = minimumMoves(s)
    const expected = 10
    expect(result).toBe(expected)
  })
})

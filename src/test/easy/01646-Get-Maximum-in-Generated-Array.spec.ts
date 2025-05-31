import { describe, expect, it } from 'vitest'
import { getMaximumGenerated } from '../../code/easy/01646-Get-Maximum-in-Generated-Array'

describe('largest substring between two equal characters test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 7
    const result = getMaximumGenerated(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = getMaximumGenerated(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 3
    const result = getMaximumGenerated(n)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 0
    const result = getMaximumGenerated(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

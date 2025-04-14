import { describe, expect, it } from 'vitest'
import { maxPower } from '../../code/easy/01446-Consecutive-Powers'

describe('max power test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'leetcode'
    const result = maxPower(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('max power test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abbcccddddeeeeedcba'
    const result = maxPower(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('max power test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'triplepillooooow'
    const result = maxPower(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('max power test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'hooraaaaaaaaaaay'
    const result = maxPower(s)
    const expected = 11
    expect(result).toBe(expected)
  })
})

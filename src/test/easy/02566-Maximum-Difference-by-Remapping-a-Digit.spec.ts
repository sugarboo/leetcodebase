import { describe, expect, it } from 'vitest'
import { minMaxDifference } from '../../code/easy/02566-Maximum-Difference-by-Remapping-a-Digit'

describe('maximum difference by remapping a digit test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 11891
    const result = minMaxDifference(num)
    const expected = 99009
    expect(result).toBe(expected)
  })
})

describe('maximum difference by remapping a digit test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 90
    const result = minMaxDifference(num)
    const expected = 99
    expect(result).toBe(expected)
  })
})

describe('maximum difference by remapping a digit test case 🥉', () => {
  it('should return the expected result', () => {
    const num = 123456
    const result = minMaxDifference(num)
    const expected = 900000
    expect(result).toBe(expected)
  })
})

describe('maximum difference by remapping a digit test case 🏅', () => {
  it('should return the expected result', () => {
    const num = 911
    const result = minMaxDifference(num)
    const expected = 988
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { alternateDigitSum } from '../../code/easy/02544-Alternating-Digit-Sum'

describe('alternate digit sum test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 521
    const result = alternateDigitSum(n)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('alternate digit sum test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 111
    const result = alternateDigitSum(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('alternate digit sum test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 886996
    const result = alternateDigitSum(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

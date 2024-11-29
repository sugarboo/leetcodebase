import { describe, expect, it } from 'vitest'
import { binaryGap } from '../../code/easy/00868-Binary-Gap'

describe('binary gap test case 🥇', () => {
  it('should return the expected result', () => {
    const result = binaryGap(22)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('binary gap test case 🥈', () => {
  it('should return the expected result', () => {
    const result = binaryGap(8)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('binary gap test case 🥉', () => {
  it('should return the expected result', () => {
    const result = binaryGap(5)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('binary gap test case 🏅', () => {
  it('should return the expected result', () => {
    const result = binaryGap(66412)
    const expected = 7
    expect(result).toBe(expected)
  })
})

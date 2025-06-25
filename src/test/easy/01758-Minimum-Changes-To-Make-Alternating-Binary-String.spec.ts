import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/easy/01758-Minimum-Changes-To-Make-Alternating-Binary-String'

describe('minimum changes to make alternating binary string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '0100'
    const result = minOperations(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum changes to make alternating binary string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '10010101'
    const result = minOperations(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum changes to make alternating binary string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '1111'
    const result = minOperations(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum changes to make alternating binary string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '10'
    const result = minOperations(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

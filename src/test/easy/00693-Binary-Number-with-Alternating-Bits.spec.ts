import { describe, expect, it } from 'vitest'
import { hasAlternatingBits } from '../../code/easy/00693-Binary-Number-with-Alternating-Bits'

describe('binary number with alternating bits test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = hasAlternatingBits(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('binary number with alternating bits test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 7
    const result = hasAlternatingBits(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('binary number with alternating bits test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 11
    const result = hasAlternatingBits(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

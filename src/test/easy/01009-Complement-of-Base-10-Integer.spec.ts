import { describe, expect, it } from 'vitest'
import { bitwiseComplement } from '../../code/easy/01009-Complement-of-Base-10-Integer'

describe('bitwise complement test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = bitwiseComplement(n)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('bitwise complement test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 7
    const result = bitwiseComplement(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('bitwise complement test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 10
    const result = bitwiseComplement(n)
    const expected = 5
    expect(result).toBe(expected)
  })
})

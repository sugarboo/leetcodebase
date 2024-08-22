import { describe, expect, it } from 'vitest'
import { findComplement } from '../../code/easy/00476-Number-Complement'

describe('number complement test case 🥇', () => {
  it('should return the expected number', () => {
    const result = findComplement(5)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('number complement test case 🥈', () => {
  it('should return the expected number', () => {
    const result = findComplement(1)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('number complement test case 🥉', () => {
  it('should return the expected number', () => {
    const result = findComplement(2)
    const expected = 1
    expect(result).toBe(expected)
  })
})

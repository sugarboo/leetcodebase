import { describe, expect, it } from 'vitest'
import { reverseBits } from '../../code/easy/00190-Reverse-Bits'

describe('reverse bits test case 🥇', () => {
  it('should return the expected number', () => {
    const n = 0b00000010100101000001111010011100
    const result = reverseBits(n)
    const expected = 964176192
    expect(result).toBe(expected)
  })
})

describe('reverse bits test case 🥈', () => {
  it('should return the expected number', () => {
    const n = 0b11111111111111111111111111111101
    const result = reverseBits(n)
    const expected = 3221225471
    expect(result).toBe(expected)
  })
})

describe('reverse bits test case 🥉', () => {
  it('should return the expected number', () => {
    const n = 0b00000000000000000000000000000000
    const result = reverseBits(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('reverse bits test case 🏅', () => {
  it('should return the expected number', () => {
    const n = 0b11111111111111111111111111111111
    const result = reverseBits(n)
    const expected = 4294967295
    expect(result).toBe(expected)
  })
})

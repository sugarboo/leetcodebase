import { describe, expect, it } from 'vitest'
import { isOneBitCharacter } from '../../code/easy/00717-1-bit-and-2-bit-Characters'

describe('1-bit and 2-bit Characters test case 🥇', () => {
  it('should return the expected result', () => {
    const bits = [1, 0, 0]
    const result = isOneBitCharacter(bits)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('1-bit and 2-bit Characters test case 🥈', () => {
  it('should return the expected result', () => {
    const bits = [1, 1, 1, 0]
    const result = isOneBitCharacter(bits)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('1-bit and 2-bit Characters test case 🥉', () => {
  it('should return the expected result', () => {
    const bits = [1, 1, 1, 0, 0]
    const result = isOneBitCharacter(bits)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('1-bit and 2-bit Characters test case 🏅', () => {
  it('should return the expected result', () => {
    const bits = [1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
    const result = isOneBitCharacter(bits)
    const expected = true
    expect(result).toBe(expected)
  })
})

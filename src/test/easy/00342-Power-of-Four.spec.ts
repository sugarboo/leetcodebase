import { describe, expect, it } from 'vitest'
import { isPowerOfFour } from '../../code/easy/00342-Power-of-Four'

describe('power of four test case 🥇', () => {
  it('should return the expected result', () => {
    expect(isPowerOfFour(16)).toBe(true)
  })
})

describe('power of four test case 🥈', () => {
  it('should return the expected result', () => {
    expect(isPowerOfFour(5)).toBe(false)
  })
})

describe('power of four test case 🥉', () => {
  it('should return the expected result', () => {
    expect(isPowerOfFour(1)).toBe(true)
  })
})

describe('power of four test case 🏅', () => {
  it('should return the expected result', () => {
    expect(isPowerOfFour(16777216)).toBe(true)
  })
})

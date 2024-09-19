import { describe, expect, it } from 'vitest'
import { isPowerOfTwo } from '../../code/easy/00231-Power-of-Two'

describe('power of two test case 🥇', () => {
  it('should return the expected result', () => {
    expect(isPowerOfTwo(1)).toBe(true)
  })
})

describe('power of two test case 🥈', () => {
  it('should return the expected result', () => {
    expect(isPowerOfTwo(16)).toBe(true)
  })
})

describe('power of two test case 🥉', () => {
  it('should return the expected result', () => {
    expect(isPowerOfTwo(3)).toBe(false)
  })
})

describe('power of two test case 🏅', () => {
  it('should return the expected result', () => {
    expect(isPowerOfTwo(8)).toBe(true)
  })
})

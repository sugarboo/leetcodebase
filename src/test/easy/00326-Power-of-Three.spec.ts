import { describe, expect, it } from 'vitest'
import { isPowerOfThree } from '../../code/easy/00326-Power-of-Three'

describe('power of three test case 🥇', () => {
  it('should return the expected result', () => {
    expect(isPowerOfThree(27)).toBe(true)
  })
})

describe('power of three test case 🥈', () => {
  it('should return the expected result', () => {
    expect(isPowerOfThree(0)).toBe(false)
  })
})

describe('power of three test case 🥉', () => {
  it('should return the expected result', () => {
    expect(isPowerOfThree(-1)).toBe(false)
  })
})

describe('power of three test case 🏅', () => {
  it('should return the expected result', () => {
    expect(isPowerOfThree(1162261467)).toBe(true)
  })
})

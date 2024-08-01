import { describe, expect, it } from 'vitest'
import { mySqrt } from '../../code/easy/00069-Sqrt-X'

describe('sqrt(x) test case 🥇', () => {
  it('should return the expected number', () => {
    const x = 4
    const expected = 2
    expect(mySqrt(x)).toBe(expected)
  })
})

describe('sqrt(x) test case 🥈', () => {
  it('should return the expected number', () => {
    const x = 8
    const expected = 2
    expect(mySqrt(x)).toBe(expected)
  })
})

describe('sqrt(x) test case 🥉', () => {
  it('should return the expected number', () => {
    const x = 256
    const expected = 16
    expect(mySqrt(x)).toBe(expected)
  })
})

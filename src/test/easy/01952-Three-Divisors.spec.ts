import { describe, expect, it } from 'vitest'
import { isThree } from '../../code/easy/01952-Three-Divisors'

describe('three divisors test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = isThree(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('three divisors test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = isThree(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('three divisors test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 12
    const result = isThree(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('three divisors test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 14
    const result = isThree(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { isHappy } from '../../code/easy/00202-Happy-Number'

describe('happy number test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 19
    const result = isHappy(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('happy number test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = isHappy(n)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('happy number test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1
    const result = isHappy(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('happy number test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 44
    const result = isHappy(n)
    const expected = true
    expect(result).toBe(expected)
  })
})

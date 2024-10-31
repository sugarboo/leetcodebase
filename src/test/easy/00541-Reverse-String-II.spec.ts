import { describe, expect, it } from 'vitest'
import { reverseStr } from '../../code/easy/00541-Reverse-String-II'

describe('reverse string II test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abcdefg'
    const k = 2
    const result = reverseStr(s, k)
    const expected = 'bacdfeg'
    expect(result).toBe(expected)
  })
})

describe('reverse string II test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcd'
    const k = 2
    const result = reverseStr(s, k)
    const expected = 'bacd'
    expect(result).toBe(expected)
  })
})

describe('reverse string II test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abcdefghijklmnopqrstuvwxyz'
    const k = 2
    const result = reverseStr(s, k)
    const expected = 'bacdfeghjiklnmoprqstvuwxzy'
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { getLucky } from '../../code/easy/01945-Sum-of-Digits-of-String-After-Convert'

describe('sum of digits of string after convert test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'iiii'
    const k = 1
    const result = getLucky(s, k)
    const expected = 36
    expect(result).toBe(expected)
  })
})

describe('sum of digits of string after convert test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'leetcode'
    const k = 2
    const result = getLucky(s, k)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('sum of digits of string after convert test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'zbax'
    const k = 2
    const result = getLucky(s, k)
    const expected = 8
    expect(result).toBe(expected)
  })
})

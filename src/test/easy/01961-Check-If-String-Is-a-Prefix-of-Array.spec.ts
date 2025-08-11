import { describe, expect, it } from 'vitest'
import { isPrefixString } from '../../code/easy/01961-Check-If-String-Is-a-Prefix-of-Array'

describe('check if string is a prefix of array test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'iloveleetcode'
    const words = ['i', 'love', 'leetcode', 'apples']
    const result = isPrefixString(s, words)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if string is a prefix of array test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'iloveleetcode'
    const words = ['i', 'love', 'leetcode', 'apples']
    const result = isPrefixString(s, words)
    const expected = true
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { scoreOfString } from '../../code/easy/03110-Score-of-a-String'

describe('score of a string test case 🥇', () => {
  it('should return the expected count', () => {
    const s = 'hello'
    const expected = 13
    expect(scoreOfString(s)).toBe(expected)
  })
})

describe('score of a string test case 🥈', () => {
  it('should return the expected count', () => {
    const s = 'zaz'
    const expected = 50
    expect(scoreOfString(s)).toBe(expected)
  })
})

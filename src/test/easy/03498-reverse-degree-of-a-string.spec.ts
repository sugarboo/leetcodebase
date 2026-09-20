import { describe, expect, it } from 'vitest'
import { reverseDegree } from '../../code/easy/03498-reverse-degree-of-a-string'

describe('reverse degree of a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = "abc"
    const result = reverseDegree(s)
    const expected = 148
    expect(result).toBe(expected)
  })
})

describe('reverse degree of a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = "zaza"
    const result = reverseDegree(s)
    const expected = 160
    expect(result).toBe(expected)
  })
})


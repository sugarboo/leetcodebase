import { describe, expect, it } from 'vitest'
import { sortString } from '../../code/easy/01370-Increasing-Decreasing-String'

describe('sort string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aaaabbbbcccc'
    const result = sortString(s)
    const expected = 'abccbaabccba'
    expect(result).toBe(expected)
  })
})

describe('sort string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'rat'
    const result = sortString(s)
    const expected = 'art'
    expect(result).toBe(expected)
  })
})

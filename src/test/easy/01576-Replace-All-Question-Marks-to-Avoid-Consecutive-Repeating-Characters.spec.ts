import { describe, expect, it } from 'vitest'
import { modifyString } from '../../code/easy/01576-Replace-All-Question-Marks-to-Avoid-Consecutive-Repeating-Characters'

describe('replace all question marks to avoid consecutive repeating characters test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '?zs'
    const result = modifyString(s)
    const expected = 'azs'
    expect(result).toBe(expected)
  })
})

describe('replace all question marks to avoid consecutive repeating characters test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'ubv?w'
    const result = modifyString(s)
    const expected = 'ubvaw'
    expect(result).toBe(expected)
  })
})

describe('replace all question marks to avoid consecutive repeating characters test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'j?qg??b'
    const result = modifyString(s)
    const expected = 'jaqgcdb'
    expect(result).toBe(expected)
  })
})

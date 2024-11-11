import { describe, expect, it } from 'vitest'
import { restoreString } from '../../code/easy/01528-Shuffle-String'

describe('shuffle string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'codeleet'
    const indices = [4, 5, 6, 7, 0, 2, 1, 3]
    const result = restoreString(s, indices)
    const expected = 'leetcode'
    expect(result).toBe(expected)
  })
})

describe('shuffle string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abc'
    const indices = [0, 1, 2]
    const result = restoreString(s, indices)
    const expected = 'abc'
    expect(result).toBe(expected)
  })
})

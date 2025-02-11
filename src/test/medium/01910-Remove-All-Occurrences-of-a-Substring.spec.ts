import { describe, expect, it } from 'vitest'
import { removeOccurrences } from '../../code/medium/01910-Remove-All-Occurrences-of-a-Substring'

describe('remove all occurrences of a substring test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'daabcbaabcbc'
    const part = 'abc'
    const result = removeOccurrences(s, part)
    const expected = 'dab'
    expect(result).toBe(expected)
  })
})

describe('remove all occurrences of a substring test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'axxxxyyyyb'
    const part = 'xy'
    const result = removeOccurrences(s, part)
    const expected = 'ab'
    expect(result).toBe(expected)
  })
})

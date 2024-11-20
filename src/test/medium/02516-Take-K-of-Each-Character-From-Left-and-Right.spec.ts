import { describe, expect, it } from 'vitest'
import { takeCharacters } from '../../code/medium/02516-Take-K-of-Each-Character-From-Left-and-Right'

describe('take k of each character from left and right test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aabaaaacaabc'
    const k = 2
    const result = takeCharacters(s, k)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('take k of each character from left and right test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'a'
    const k = 1
    const result = takeCharacters(s, k)
    const expected = -1
    expect(result).toBe(expected)
  })
})

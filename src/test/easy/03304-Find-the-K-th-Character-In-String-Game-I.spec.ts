import { describe, expect, it } from 'vitest'
import { kthCharacter } from '../../code/easy/03304-Find-the-K-th-Character-In-String-Game-I'

describe('find the K th character in string game I test case 🥇', () => {
  it('should return the expected result', () => {
    const k = 5
    const result = kthCharacter(k)
    const expected = 'b'
    expect(result).toBe(expected)
  })
})

describe('find the K th character in string game I test case 🥈', () => {
  it('should return the expected result', () => {
    const k = 10
    const result = kthCharacter(k)
    const expected = 'c'
    expect(result).toBe(expected)
  })
})

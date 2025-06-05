import { describe, expect, it } from 'vitest'
import { smallestEquivalentString } from '../../code/medium/01061-Lexicographically-Smallest-Equivalent-String'

describe('best sightseeing pair test case 🥇', () => {
  it('should return the expected steps', () => {
    const s1 = 'parker'
    const s2 = 'morris'
    const baseStr = 'parser'
    const result = smallestEquivalentString(s1, s2, baseStr)
    const expected = 'makkek'
    expect(result).toBe(expected)
  })
})

describe('best sightseeing pair test case 🥈', () => {
  it('should return the expected steps', () => {
    const s1 = 'hello'
    const s2 = 'world'
    const baseStr = 'hold'
    const result = smallestEquivalentString(s1, s2, baseStr)
    const expected = 'hdld'
    expect(result).toBe(expected)
  })
})

describe('best sightseeing pair test case 🥉', () => {
  it('should return the expected steps', () => {
    const s1 = 'leetcode'
    const s2 = 'programs'
    const baseStr = 'sourcecode'
    const result = smallestEquivalentString(s1, s2, baseStr)
    const expected = 'aauaaaaada'
    expect(result).toBe(expected)
  })
})

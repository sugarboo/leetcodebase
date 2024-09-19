import { describe, expect, it } from 'vitest'
import { isAnagram } from '../../code/easy/00242-Valid-Anagram'

describe('valid anagram test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'anagram'
    const t = 'nagaram'
    expect(isAnagram(s, t)).toBe(true)
  })
})

describe('valid anagram test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'rat'
    const t = 'car'
    expect(isAnagram(s, t)).toBe(false)
  })
})

describe('valid anagram test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'tokyo'
    const t = 'kyoto'
    expect(isAnagram(s, t)).toBe(true)
  })
})

describe('valid anagram test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'weekend'
    const t = 'weeknd'
    expect(isAnagram(s, t)).toBe(false)
  })
})

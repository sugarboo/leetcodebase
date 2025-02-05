import { describe, expect, it } from 'vitest'
import { areAlmostEqual } from '../../code/easy/01790-Check-if-One-String-Swap-Can-Make-Strings-Equal'

describe('check if one string swap can make strings equal test case 🥇', () => {
  it('should return the expected result', () => {
    const s1 = 'bank'
    const s2 = 'kanb'
    const result = areAlmostEqual(s1, s2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if one string swap can make strings equal test case 🥈', () => {
  it('should return the expected result', () => {
    const s1 = 'attack'
    const s2 = 'defend'
    const result = areAlmostEqual(s1, s2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if one string swap can make strings equal test case 🥉', () => {
  it('should return the expected result', () => {
    const s1 = 'kelb'
    const s2 = 'kelb'
    const result = areAlmostEqual(s1, s2)
    const expected = true
    expect(result).toBe(expected)
  })
})

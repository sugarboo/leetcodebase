import { describe, expect, it } from 'vitest'
import { canBeEqual } from '../../code/easy/02839-Check-If-Strings-Can-be-Made-Equal-With-Operations-I'

describe('check if strings can be made equal with operations I test case 🥇', () => {
  it('should return the expected result', () => {
    const s1 = 'abcd'
    const s2 = 'cdab'
    const result = canBeEqual(s1, s2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if strings can be made equal with operations I test case 🥈', () => {
  it('should return the expected result', () => {
    const s1 = 'abcd'
    const s2 = 'dacb'
    const result = canBeEqual(s1, s2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('check if strings can be made equal with operations I test case 🥉', () => {
  it('should return the expected result', () => {
    const s1 = 'aabb'
    const s2 = 'baab'
    const result = canBeEqual(s1, s2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if strings can be made equal with operations I test case 🏅', () => {
  it('should return the expected result', () => {
    const s1 = 'abaa'
    const s2 = 'aaab'
    const result = canBeEqual(s1, s2)
    const expected = true
    expect(result).toBe(expected)
  })
})

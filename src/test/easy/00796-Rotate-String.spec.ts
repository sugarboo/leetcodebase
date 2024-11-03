import { describe, expect, it } from 'vitest'
import { rotateString } from '../../code/easy/00796-Rotate-String'

describe('rotate string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abcde'
    const goal = 'cdeab'
    const result = rotateString(s, goal)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('rotate string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcde'
    const goal = 'abced'
    const result = rotateString(s, goal)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('rotate string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'bbbacddceeb'
    const goal = 'ceebbbbacdd'
    const result = rotateString(s, goal)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('rotate string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'abcde'
    const goal = 'cdefab'
    const result = rotateString(s, goal)
    const expected = false
    expect(result).toBe(expected)
  })
})

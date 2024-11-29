import { describe, expect, it } from 'vitest'
import { buddyStrings } from '../../code/easy/00859-Buddy-Strings'

describe('buddy string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'ab'
    const goal = 'ba'
    const result = buddyStrings(s, goal)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('buddy string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'ab'
    const goal = 'ab'
    const result = buddyStrings(s, goal)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('buddy string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'aa'
    const goal = 'aa'
    const result = buddyStrings(s, goal)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('buddy string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'abab'
    const goal = 'abab'
    const result = buddyStrings(s, goal)
    const expected = true
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { myExpect } from '../../code/easy/02704-To-Be-Or-Not-To-Be'

describe('to be or not to be test case 🥇', () => {
  it('should return the expected result', () => {
    const expected = true
    expect(myExpect(5).toBe(5)).toBe(expected)
  })
})

describe('to be or not to be test case 🥈', () => {
  it('should return the expected result', () => {
    const expected = false
    try {
      expect(myExpect(5).toBe(null)).toBe(expected)
    } catch (error) {
      expect(error.message).toBe('Not Equal')
    }
  })
})

describe('to be or not to be test case 🥉', () => {
  it('should return the expected result', () => {
    const expected = true
    expect(myExpect(5).notToBe(null)).toBe(expected)
  })
})

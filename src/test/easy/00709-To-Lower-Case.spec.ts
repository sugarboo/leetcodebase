import { describe, expect, it } from 'vitest'
import { toLowerCase } from '../../code/easy/00709-To-Lower-Case'

describe('to lower case test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'Hello'
    const result = toLowerCase(s)
    const expected = 'hello'
    expect(result).toBe(expected)
  })
})

describe('to lower case test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'here'
    const result = toLowerCase(s)
    const expected = 'here'
    expect(result).toBe(expected)
  })
})

describe('to lower case test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'LOVELY'
    const result = toLowerCase(s)
    const expected = 'lovely'
    expect(result).toBe(expected)
  })
})

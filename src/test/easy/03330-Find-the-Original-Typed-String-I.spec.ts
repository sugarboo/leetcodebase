import { describe, expect, it } from 'vitest'
import { possibleStringCount } from '../../code/easy/03330-Find-the-Original-Typed-String-I'

describe('find the original typed string I test case 🥇', () => {
  it('should return the expected result', () => {
    const word = 'abbcccc'
    const result = possibleStringCount(word)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('find the original typed string I test case 🥈', () => {
  it('should return the expected result', () => {
    const word = 'abcd'
    const result = possibleStringCount(word)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find the original typed string I test case 🥉', () => {
  it('should return the expected result', () => {
    const word = 'aaaa'
    const result = possibleStringCount(word)
    const expected = 4
    expect(result).toBe(expected)
  })
})

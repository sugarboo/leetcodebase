import { describe, expect, it } from 'vitest'
import { equalFrequency } from '../../code/easy/02423-Remove-Letter-To-Equalize-Frequency'

describe('remove letter to equalize frequency test case 🥇', () => {
  it('should return the expected result', () => {
    const word = 'abcc'
    const result = equalFrequency(word)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('remove letter to equalize frequency test case 🥈', () => {
  it('should return the expected result', () => {
    const word = 'aazz'
    const result = equalFrequency(word)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('remove letter to equalize frequency test case 🥉', () => {
  it('should return the expected result', () => {
    const word = 'bac'
    const result = equalFrequency(word)
    const expected = true
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minAddToMakeValid } from '../../code/medium/00921-Minimum-Add-to-Make-Parentheses-Valid'

describe('minimum add to make parentheses valid test case 🥇', () => {
  it('should return the expected steps', () => {
    const s = '())'
    const result = minAddToMakeValid(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum add to make parentheses valid test case 🥈', () => {
  it('should return the expected steps', () => {
    const s = '((('
    const result = minAddToMakeValid(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum add to make parentheses valid test case 🥉', () => {
  it('should return the expected steps', () => {
    const s = '()))(('
    const result = minAddToMakeValid(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

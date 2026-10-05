import { describe, expect, it } from 'vitest'
import { scoreOfParentheses } from '../../code/medium/00856-score-of-parentheses'

describe('score of parentheses test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '()'
    const result = scoreOfParentheses(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('score of parentheses test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '(())'
    const result = scoreOfParentheses(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('score of parentheses test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '()()'
    const result = scoreOfParentheses(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

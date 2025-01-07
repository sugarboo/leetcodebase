import { describe, expect, it } from 'vitest'
import { removeOuterParentheses } from '../../code/easy/01021-Remove-Outmost-Parentheses'

describe('remove outer parentheses test case 🥇', () => {
  it('should return the expected result', () => {
    const str = '(()())(())'
    const result = removeOuterParentheses(str)
    const expected = '()()()'
    expect(result).toBe(expected)
  })
})

describe('remove outer parentheses test case 🥈', () => {
  it('should return the expected result', () => {
    const str = '(()())(())(()(()))'
    const result = removeOuterParentheses(str)
    const expected = '()()()()(())'
    expect(result).toBe(expected)
  })
})

describe('remove outer parentheses test case 🥉', () => {
  it('should return the expected result', () => {
    const str = '()()'
    const result = removeOuterParentheses(str)
    const expected = ''
    expect(result).toBe(expected)
  })
})

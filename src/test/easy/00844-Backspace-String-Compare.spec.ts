import { describe, expect, it } from 'vitest'
import { backspaceCompare } from '../../code/easy/00844-Backspace-String-Compare'

describe('backspace string compare test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'ab#c'
    const t = 'ad#c'
    const result = backspaceCompare(s, t)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('backspace string compare test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'ab##'
    const t = 'c#d#'
    const result = backspaceCompare(s, t)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('backspace string compare test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'a#c'
    const t = 'b'
    const result = backspaceCompare(s, t)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('backspace string compare test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'y#fo##f'
    const t = 'y#f#o##f'
    const result = backspaceCompare(s, t)
    const expected = true
    expect(result).toBe(expected)
  })
})

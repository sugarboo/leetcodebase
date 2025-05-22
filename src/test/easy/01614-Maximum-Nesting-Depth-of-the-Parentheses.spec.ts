import { describe, expect, it } from 'vitest'
import { maxDepth } from '../../code/easy/01614-Maximum-Nesting-Depth-of-the-Parentheses'

describe('maximum nesting depth of the parentheses test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '(1+(2*3)+((8)/4))+1'
    const result = maxDepth(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum nesting depth of the parentheses test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '(1)+((2))+(((3)))+((((4))))'
    const result = maxDepth(s)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum nesting depth of the parentheses test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '1+(2*3)/(2-1)'
    const result = maxDepth(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('maximum nesting depth of the parentheses test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '()(())((()()))'
    const result = maxDepth(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { oddString } from '../../code/easy/02451-Odd-String-Difference'

describe('odd string difference test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['adc', 'wzy', 'abc']
    const result = oddString(words)
    const expected = 'abc'
    expect(result).toBe(expected)
  })
})

describe('odd string difference test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['aaa', 'bob', 'ccc', 'ddd']
    const result = oddString(words)
    const expected = 'bob'
    expect(result).toBe(expected)
  })
})

describe('odd string difference test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['ddd', 'poo', 'baa', 'onn']
    const result = oddString(words)
    const expected = 'ddd'
    expect(result).toBe(expected)
  })
})

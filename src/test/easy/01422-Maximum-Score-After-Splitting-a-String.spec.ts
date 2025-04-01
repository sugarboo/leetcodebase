import { describe, expect, it } from 'vitest'
import { maxScore } from '../../code/easy/01422-Maximum-Score-After-Splitting-a-String'

describe('maximum score after splitting a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '011101'
    const result = maxScore(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum score after splitting a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '00111'
    const result = maxScore(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum score after splitting a string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '1111'
    const result = maxScore(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum score after splitting a string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '00'
    const result = maxScore(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

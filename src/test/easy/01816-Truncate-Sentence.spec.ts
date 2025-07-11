import { describe, expect, it } from 'vitest'
import { truncateSentence } from '../../code/easy/01816-Truncate-Sentence'

describe('truncate sentence test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'Hello how are you Contestant'
    const k = 4
    const result = truncateSentence(s, k)
    const expected = 'Hello how are you'
    expect(result).toBe(expected)
  })
})

describe('truncate sentence test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'What is the solution to this problem'
    const k = 4
    const result = truncateSentence(s, k)
    const expected = 'What is the solution'
    expect(result).toBe(expected)
  })
})

describe('truncate sentence test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'chopper is not a tanuki'
    const k = 5
    const result = truncateSentence(s, k)
    const expected = 'chopper is not a tanuki'
    expect(result).toBe(expected)
  })
})

describe('truncate sentence test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'chopper is not a tanuki'
    const k = 1
    const result = truncateSentence(s, k)
    const expected = 'chopper'
    expect(result).toBe(expected)
  })
})

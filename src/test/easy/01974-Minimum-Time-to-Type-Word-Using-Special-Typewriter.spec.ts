import { describe, expect, it } from 'vitest'
import { minTimeToType } from '../../code/easy/01974-Minimum-Time-to-Type-Word-Using-Special-Typewriter'

describe('minimum time to type word using special typewriter test case 🥇', () => {
  it('should return the expected result', () => {
    const word = 'abc'
    const result = minTimeToType(word)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('minimum time to type word using special typewriter test case 🥈', () => {
  it('should return the expected result', () => {
    const word = 'bza'
    const result = minTimeToType(word)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('minimum time to type word using special typewriter test case 🥉', () => {
  it('should return the expected result', () => {
    const word = 'zjpc'
    const result = minTimeToType(word)
    const expected = 34
    expect(result).toBe(expected)
  })
})

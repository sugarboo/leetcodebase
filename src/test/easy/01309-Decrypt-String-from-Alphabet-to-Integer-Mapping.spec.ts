import { describe, expect, it } from 'vitest'
import { freqAlphabets } from './../../code/easy/01309-Decrypt-String-from-Alphabet-to-Integer-Mapping'

describe('decrypt string from alphabet to integer mapping test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '10#11#12'
    const result = freqAlphabets(s)
    const expected = 'jkab'
    expect(result).toBe (expected)
  })
})

describe('decrypt string from alphabet to integer mapping test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '1326#'
    const result = freqAlphabets(s)
    const expected = 'acz'
    expect(result).toBe(expected)
  })
})

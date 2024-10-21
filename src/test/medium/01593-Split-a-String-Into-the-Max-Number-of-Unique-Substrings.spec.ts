import { describe, expect, it } from 'vitest'
import { maxUniqueSplit } from '../../code/medium/01593-Split-a-String-Into-the-Max-Number-of-Unique-Substrings'

describe('split a string into the max number of unique substrings string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'ababccc'
    const result = maxUniqueSplit(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('split a string into the max number of unique substrings string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aba'
    const result = maxUniqueSplit(s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('split a string into the max number of unique substrings string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'aa'
    const result = maxUniqueSplit(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

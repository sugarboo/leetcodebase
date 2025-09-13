import { describe, expect, it } from 'vitest'
import { maxFreqSum } from '../../code/easy/03541-Find-Most-Frequent-Vowel-and-Consonant'

describe('find most frequent vowel and consonant test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'successes'
    const result = maxFreqSum(s)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find most frequent vowel and consonant test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'aeiaeia'
    const result = maxFreqSum(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { uncommonFromSentences } from '../../code/easy/00884-Uncommon-Words-from-Two-Sentences'

describe('uncommon words from two sentences test case 🥇', () => {
  it('should return the expected result', () => {
    const s1 = 'this apple is sweet'
    const s2 = 'this apple is sour'
    const result = uncommonFromSentences(s1, s2)
    const expected = ['sweet', 'sour']
    expect(result).toStrictEqual(expected)
  })
})

describe('uncommon words from two sentences test case 🥈', () => {
  it('should return the expected result', () => {
    const s1 = 'apple apple'
    const s2 = 'banana'
    const result = uncommonFromSentences(s1, s2)
    const expected = ['banana']
    expect(result).toStrictEqual(expected)
  })
})

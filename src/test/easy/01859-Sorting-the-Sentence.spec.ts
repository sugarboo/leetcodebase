import { describe, expect, it } from 'vitest'
import { sortSentence } from '../../code/easy/01859-Sorting-the-Sentence'

describe('sorting the sentence test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'is2 sentence4 This1 a3'
    const result = sortSentence(s)
    const expected = 'This is a sentence'
    expect(result).toBe(expected)
  })
})

describe('sorting the sentence test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'Myself2 Me1 I4 and3'
    const result = sortSentence(s)
    const expected = 'Me Myself and I'
    expect(result).toBe(expected)
  })
})

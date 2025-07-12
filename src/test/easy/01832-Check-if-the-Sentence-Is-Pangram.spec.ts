import { describe, expect, it } from 'vitest'
import { checkIfPangram } from '../../code/easy/01832-Check-if-the-Sentence-Is-Pangram'

describe('check if the sentence is pangram test case 🥇', () => {
  it('should return the expected result', () => {
    const sentence = 'thequickbrownfoxjumpsoverthelazydog'
    const result = checkIfPangram(sentence)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if the sentence is pangram test case 🥈', () => {
  it('should return the expected result', () => {
    const sentence = 'leetcode'
    const result = checkIfPangram(sentence)
    const expected = false
    expect(result).toBe(expected)
  })
})

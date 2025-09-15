import { describe, expect, it } from 'vitest'
import { canBeTypedWords } from '../../code/easy/01935-Maximum-Number-of-Words-You-Can-Type'

describe('maximum number of words you can type test case 🥇', () => {
  it('should return the expected result', () => {
    const text = 'hello world'
    const brokenLetters = 'ad'
    const expected = 1
    const result = canBeTypedWords(text, brokenLetters)
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum number of words you can type test case 🥈', () => {
  it('should return the expected result', () => {
    const text = 'leet code'
    const brokenLetters = 'lt'
    const expected = 1
    const result = canBeTypedWords(text, brokenLetters)
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum number of words you can type test case 🥉', () => {
  it('should return the expected result', () => {
    const text = 'leet code'
    const brokenLetters = 'e'
    const expected = 0
    const result = canBeTypedWords(text, brokenLetters)
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { sumPrefixScores } from '../../code/hard/02416-Sum-of-Prefix-Scores-of-Strings'

describe('sum of prefix scores of strings test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['abc', 'ab', 'bc', 'b']
    const result = sumPrefixScores(words)
    const expected = [5, 4, 3, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('sum of prefix scores of strings test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['abcd']
    const result = sumPrefixScores(words)
    const expected = [4]
    expect(result).toStrictEqual(expected)
  })
})

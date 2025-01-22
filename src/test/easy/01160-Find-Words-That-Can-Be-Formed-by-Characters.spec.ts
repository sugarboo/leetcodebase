import { describe, expect, it } from 'vitest'
import { countCharacters } from '../../code/easy/01160-Find-Words-That-Can-Be-Formed-by-Characters'

describe('day of the year test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['cat', 'bt', 'hat', 'tree']
    const chars = 'atach'
    const result = countCharacters(words, chars)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('count characters test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['hello', 'world', 'leetcode']
    const chars = 'welldonehoneyr'
    const result = countCharacters(words, chars)
    const expected = 10
    expect(result).toBe(expected)
  })
})

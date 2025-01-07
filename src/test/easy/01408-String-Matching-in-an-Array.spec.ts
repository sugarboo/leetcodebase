import { describe, expect, it } from 'vitest'
import { stringMatching } from '../../code/easy/01408-String-Matching-in-an-Array'

describe('string matching in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = ['mass', 'as', 'hero', 'superhero']
    const result = stringMatching(arr)
    const expected = ['as', 'hero']
    expect(result).toEqual(expected)
  })
})

describe('string matching in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = ['leetcode', 'et', 'code']
    const result = stringMatching(arr)
    const expected = ['et', 'code']
    expect(result).toEqual(expected)
  })
})

describe('string matching in an array test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = ['blue', 'green', 'bu']
    const result = stringMatching(arr)
    const expected = []
    expect(result).toEqual(expected)
  })
})

describe('string matching in an array test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am']
    const result = stringMatching(arr)
    const expected = ['leetcode', 'od', 'am']
    expect(result).toEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minExtraChar } from '../../code/medium/02707-Extra-Characters-in-a-String'

describe('extra characters in a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'leetscode'
    const dictionary = ['leet', 'code', 'leetcode']
    const result = minExtraChar(s, dictionary)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('extra characters in a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'sayhelloworld'
    const dictionary = ['leet', 'hello', 'world']
    const result = minExtraChar(s, dictionary)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('extra characters in a string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'dwmodizxvvbosxxw'
    const dictionary = ['ox', 'lb', 'diz', 'gu', 'v', 'ksv', 'o', 'nuq', 'r', 'txhe', 'e', 'wmo', 'cehy', 'tskz', 'ds', 'kzbu']
    const result = minExtraChar(s, dictionary)
    const expected = 7
    expect(result).toBe(expected)
  })
})

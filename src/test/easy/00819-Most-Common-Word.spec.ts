import { describe, expect, it } from 'vitest'
import { mostCommonWord } from '../../code/easy/00819-Most-Common-Word'

describe('most common word test case 🥇', () => {
  it('should return the expected result', () => {
    const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'
    const banned = ['hit']
    const result = mostCommonWord(paragraph, banned)
    const expected = 'ball'
    expect(result).toBe(expected)
  })
})

describe('most common word test case 🥈', () => {
  it('should return the expected result', () => {
    const paragraph = 'a.'
    const banned = []
    const result = mostCommonWord(paragraph, banned)
    const expected = 'a'
    expect(result).toBe(expected)
  })
})

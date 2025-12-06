import { describe, expect, it } from 'vitest'
import { answerQueries } from '../../code/easy/02389-Longest-Subsequence-With-Limited-Sum'

describe('minimum hours of training to win a competition test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 5, 2, 1]
    const queries = [3, 10, 21]
    const result = answerQueries(nums, queries)
    const expected = [2, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('minimum hours of training to win a competition test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 4, 5]
    const queries = [1]
    const result = answerQueries(nums, queries)
    const expected = [0]
    expect(result).toStrictEqual(expected)
  })
})

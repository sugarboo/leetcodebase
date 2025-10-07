import { describe, expect, it } from 'vitest'
import { mostFrequent } from '../../code/easy/02190-Most-Frequent-Number-Following-Key-In-an-Array'

describe('most frequent number following key in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 100, 200, 1, 100]
    const key = 1
    const result = mostFrequent(nums, key)
    const expected = 100
    expect(result).toBe(expected)
  })
})

describe('most frequent number following key in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 2, 2, 3]
    const key = 2
    const result = mostFrequent(nums, key)
    const expected = 2
    expect(result).toBe(expected)
  })
})

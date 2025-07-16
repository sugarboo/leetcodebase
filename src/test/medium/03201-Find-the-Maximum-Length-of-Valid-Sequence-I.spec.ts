import { describe, expect, it } from 'vitest'
import { maximumLength } from '../../code/medium/03201-Find-the-Maximum-Length-of-Valid-Sequence-I'

describe('find the maximum length of valid sequence I test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 3, 4]
    const result = maximumLength(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('find the maximum length of valid sequence I test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 1, 1, 2, 1, 2]
    const result = maximumLength(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find the maximum length of valid sequence I test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [1, 3]
    const result = maximumLength(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

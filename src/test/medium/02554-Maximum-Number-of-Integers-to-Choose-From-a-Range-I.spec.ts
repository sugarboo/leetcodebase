import { describe, expect, it } from 'vitest'
import { maxCount } from '../../code/medium/02554-Maximum-Number-of-Integers-to-Choose-From-a-Range-I'

describe('maximum number of integers to choose from a range I test case 🥇', () => {
  it('should return the expected result', () => {
    const banned = [1, 6, 5]
    const n = 5
    const maxSum = 6
    const result = maxCount(banned, n, maxSum)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum number of integers to choose from a range I test case 🥈', () => {
  it('should return the expected result', () => {
    const banned = [1, 2, 3, 4, 5, 6, 7]
    const n = 8
    const maxSum = 1
    const result = maxCount(banned, n, maxSum)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('maximum number of integers to choose from a range I test case 🥉', () => {
  it('should return the expected result', () => {
    const banned = [11]
    const n = 7
    const maxSum = 50
    const result = maxCount(banned, n, maxSum)
    const expected = 7
    expect(result).toBe(expected)
  })
})

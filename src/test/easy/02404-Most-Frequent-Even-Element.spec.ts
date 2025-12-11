import { describe, expect, it } from 'vitest'
import { mostFrequentEven } from '../../code/easy/02404-Most-Frequent-Even-Element'

describe('most frequent even element test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 2, 2, 4, 4, 1]
    const result = mostFrequentEven(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('most frequent even element test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [4, 4, 4, 9, 2, 4]
    const result = mostFrequentEven(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('most frequent even element test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [29, 47, 21, 41, 13, 37, 25, 7]
    const result = mostFrequentEven(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('most frequent even element test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290]
    const result = mostFrequentEven(nums)
    const expected = 3346
    expect(result).toBe(expected)
  })
})

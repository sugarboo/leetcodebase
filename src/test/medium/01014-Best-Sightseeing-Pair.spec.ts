import { describe, expect, it } from 'vitest'
import { maxScoreSightseeingPair } from '../../code/medium/01014-Best-Sightseeing-Pair'

describe('best sightseeing pair test case 🥇', () => {
  it('should return the expected steps', () => {
    const nums = [8, 1, 5, 2, 6]
    const result = maxScoreSightseeingPair(nums)
    const expected = 11
    expect(result).toBe(expected)
  })
})

describe('best sightseeing pair test case 🥈', () => {
  it('should return the expected steps', () => {
    const nums = [1, 2]
    const result = maxScoreSightseeingPair(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('best sightseeing pair test case 🥉', () => {
  it('should return the expected steps', () => {
    const nums = [1, 8, 17, 2, 19, 1, 3, 19]
    const result = maxScoreSightseeingPair(nums)
    const expected = 35
    expect(result).toBe(expected)
  })
})

describe('best sightseeing pair test case 🏅', () => {
  it('should return the expected steps', () => {
    const nums = [1, 3, 5, 2, 1, 3, 1]
    const result = maxScoreSightseeingPair(nums)
    const expected = 7
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minimumDistance } from '../../code/easy/03740-Minimum-Distance-Between-Three-Equal-Elements-I'

describe('minimum distance between three equal elements I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 1, 1, 3]
    const result = minimumDistance(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('minimum distance between three equal elements I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 3, 2, 1, 2]
    const result = minimumDistance(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('minimum distance between three equal elements I test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const result = minimumDistance(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('minimum distance between three equal elements I test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 3, 2, 1, 2, 1, 1]
    const result = minimumDistance(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

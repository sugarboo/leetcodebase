import { describe, expect, it } from 'vitest'
import { countBeautifulPairs } from '../../code/easy/02748-number-of-beautiful-pairs'

describe('number of beautiful pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 5, 1, 4]
    const result = countBeautifulPairs(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('number of beautiful pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [11, 21, 12]
    const result = countBeautifulPairs(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

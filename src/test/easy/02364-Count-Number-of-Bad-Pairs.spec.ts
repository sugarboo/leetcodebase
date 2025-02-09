import { describe, expect, it } from 'vitest'
import { countBadPairs } from '../../code/easy/02364-Count-Number-of-Bad-Pairs'

describe('count number of bad pairs test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = countBadPairs(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count number of bad pairs test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [4, 1, 3, 3]
    const result = countBadPairs(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

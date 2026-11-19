import { describe, expect, it } from 'vitest'
import { minimizeSum } from '../../code/medium/02567-minimum-score-by-changing-two-elements'

describe('minimum score by changing two elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 4, 7, 8, 5]
    const result = minimizeSum(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum score by changing two elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 4, 3]
    const result = minimizeSum(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

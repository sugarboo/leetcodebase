import { describe, expect, it } from 'vitest'
import { minMaxGame } from '../../code/easy/02293-Min-Max-Game'

describe('min max game test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 5, 2, 4, 8, 2, 2]
    const result = minMaxGame(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('min max game test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3]
    const result = minMaxGame(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

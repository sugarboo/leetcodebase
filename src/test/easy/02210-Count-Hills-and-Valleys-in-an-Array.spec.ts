import { describe, expect, it } from 'vitest'
import { countHillValley } from '../../code/easy/02210-Count-Hills-and-Valleys-in-an-Array'

describe('count hills and valleys in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 4, 1, 1, 6, 5]
    const result = countHillValley(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count hills and valleys in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [6, 6, 5, 5, 4, 1]
    const result = countHillValley(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

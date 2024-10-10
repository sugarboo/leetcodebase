import { describe, expect, it } from 'vitest'
import { maxWidthRamp } from '../../code/medium/00962-Maximum-Width-Ramp'

describe('maximum width ramp test case 🥇', () => {
  it('should return the expected steps', () => {
    const nums = [6, 0, 8, 2, 1, 5]
    const result = maxWidthRamp(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum width ramp test case 🥈', () => {
  it('should return the expected steps', () => {
    const nums = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1]
    const result = maxWidthRamp(nums)
    const expected = 7
    expect(result).toBe(expected)
  })
})

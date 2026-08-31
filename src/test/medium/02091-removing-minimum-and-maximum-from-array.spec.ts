import { describe, expect, it } from 'vitest'
import { minimumDeletions } from '../../code/medium/02091-removing-minimum-and-maximum-from-array'

describe('removing minimum and maximum from array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 10, 7, 5, 4, 1, 8, 6]
    const result = minimumDeletions(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('removing minimum and maximum from array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0, -4, 19, 1, 8, -2, -3, 5]
    const result = minimumDeletions(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('removing minimum and maximum from array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [101]
    const result = minimumDeletions(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

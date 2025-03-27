import { describe, expect, it } from 'vitest'
import { minimumIndex } from '../../code/medium/02780-Minimum-Index-of-a-Valid-Split'

describe('minimum index of a valid split test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 2, 2]
    const result = minimumIndex(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum index of a valid split test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [2, 1, 3, 1, 1, 1, 7, 1, 2, 1]
    const result = minimumIndex(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum index of a valid split test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [3, 3, 3, 3, 7, 2, 2]
    const result = minimumIndex(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

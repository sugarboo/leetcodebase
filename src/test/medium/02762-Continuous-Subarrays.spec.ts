import { describe, expect, it } from 'vitest'
import { continuousSubarrays } from '../../code/medium/02762-Continuous-Subarrays'

describe('continuous subarrays test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [5, 4, 2, 4]
    const result = continuousSubarrays(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('continuous subarrays test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 3]
    const result = continuousSubarrays(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('continuous subarrays test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [1, 4, 2, 3, 1]
    const result = continuousSubarrays(nums)
    const expected = 10
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { zeroFilledSubarray } from '../../code/medium/02348-Number-of-Zero-Filled-Subarrays'

describe('number of zero filled subarrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 3, 0, 0, 2, 0, 0, 4]
    const result = zeroFilledSubarray(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('number of zero filled subarrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0, 0, 0, 2, 0, 0]
    const result = zeroFilledSubarray(nums)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('number of zero filled subarrays test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 10, 2019]
    const result = zeroFilledSubarray(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

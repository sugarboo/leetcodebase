import { describe, expect, it } from 'vitest'
import { sumOddLengthSubarrays } from '../../code/easy/01588-Sum-of-All-Odd-Length-Subarrays'

describe('sum of all odd length subarrays test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 4, 2, 5, 3]
    const result = sumOddLengthSubarrays(arr)
    const expected = 58
    expect(result).toBe(expected)
  })
})

describe('sum of all odd length subarrays test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2]
    const result = sumOddLengthSubarrays(arr)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('sum of all odd length subarrays test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [10, 11, 12]
    const result = sumOddLengthSubarrays(arr)
    const expected = 66
    expect(result).toBe(expected)
  })
})

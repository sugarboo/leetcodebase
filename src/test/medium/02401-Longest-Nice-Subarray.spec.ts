import { describe, expect, it } from 'vitest'
import { longestNiceSubarray } from '../../code/medium/02401-Longest-Nice-Subarray'

describe('longest nice subarray test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 3, 8, 48, 10]
    const result = longestNiceSubarray(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('longest nice subarray test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [3, 1, 5, 11, 13]
    const result = longestNiceSubarray(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('longest nice subarray test case 🥉', () => {
  it('should return the expected number', () => {
    const nums = [744437702, 379056602, 145555074, 392756761, 560864007, 934981918, 113312475, 1090, 16384, 33, 217313281, 117883195, 978927664]
    const result = longestNiceSubarray(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

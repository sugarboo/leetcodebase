import { describe, expect, it } from 'vitest'
import { minSwaps } from '../../code/medium/01963-Minimum-Number-of-Swaps-to-Make-the-String-Balanced'

describe('minimum number of swaps to make the string balanced test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '][]['
    const expected = 1
    const result = minSwaps(s)
    expect(result).toBe(expected)
  })
})

describe('minimum number of swaps to make the string balanced test case 🥈', () => {
  it('should return the expected result', () => {
    const s = ']]][[['
    const expected = 2
    const result = minSwaps(s)
    expect(result).toBe(expected)
  })
})

describe('minimum number of swaps to make the string balanced test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '[]'
    const expected = 0
    const result = minSwaps(s)
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { maxDifference } from '../../code/easy/03442-Maximum-Difference-Between-Even-and-Odd-Frequency-I'

describe('maximum difference between even and odd frequency test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'aaaaabbc'
    const result = maxDifference(s)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum difference between even and odd frequency test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abcabcab'
    const result = maxDifference(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

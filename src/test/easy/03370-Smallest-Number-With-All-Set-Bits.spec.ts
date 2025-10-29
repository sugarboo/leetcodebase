import { describe, expect, it } from 'vitest'
import { smallestNumber } from '../../code/easy/03370-Smallest-Number-With-All-Set-Bits'

describe('smallest number with all set bits test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = smallestNumber(n)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('smallest number with all set bits test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 10
    const result = smallestNumber(n)
    const expected = 15
    expect(result).toBe(expected)
  })
})

describe('smallest number with all set bits test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1
    const result = smallestNumber(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

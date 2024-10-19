import { describe, expect, it } from 'vitest'
import { findKthBit } from '../../code/medium/01545-Find-Kth-Bit-in-Nth-Binary-String'

describe('find kth bit in nth binary string test case 🥇', () => {
  it('should return the expected score', () => {
    const n = 3
    const k = 1
    const result = findKthBit(n, k)
    const expected = '0'
    expect(result).toBe(expected)
  })
})

describe('find kth bit in nth binary string test case 🥈', () => {
  it('should return the expected score', () => {
    const n = 4
    const k = 11
    const result = findKthBit(n, k)
    const expected = '1'
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { sum } from '../../code/easy/02235-Add-Two-Integers'

describe('add two integers test case 🥇', () => {
  it('should return the expected result', () => {
    const result = sum(12, 5)
    const expected = 17
    expect(result).toBe(expected)
  })
})

describe('add two integers test case 🥈', () => {
  it('should return the expected result', () => {
    const result = sum(-10, 4)
    const expected = -6
    expect(result).toBe(expected)
  })
})

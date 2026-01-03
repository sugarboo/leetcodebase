import { describe, expect, it } from 'vitest'
import { findNonMinOrMax } from '../../code/easy/02733-Neither-Minimum-nor-Maximum'

describe('neither minimum nor maximum test case 🥇', () => {
  it('should return the expected result', () => {
    const n = [3, 2, 1, 4]
    const result = findNonMinOrMax(n)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('neither minimum nor maximum test case 🥈', () => {
  it('should return the expected result', () => {
    const n = [1, 2]
    const result = findNonMinOrMax(n)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('neither minimum nor maximum test case 🥉', () => {
  it('should return the expected result', () => {
    const n = [2, 1, 3]
    const result = findNonMinOrMax(n)
    const expected = 2
    expect(result).toBe(expected)
  })
})

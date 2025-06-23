import { describe, expect, it } from 'vitest'
import { reinitializePermutation } from '../../code/medium/01806-Minimum-Number-of-Operations-to-Reinitialize-a-Permutation'

describe('minimum number of operations to reinitialize a permutation test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = reinitializePermutation(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to reinitialize a permutation test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = reinitializePermutation(n)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to reinitialize a permutation test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 6
    const result = reinitializePermutation(n)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to reinitialize a permutation test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 8
    const result = reinitializePermutation(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

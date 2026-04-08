import { describe, expect, it } from 'vitest'
import { kItemsWithMaximumSum } from '../../code/easy/02600-K-Items-With-the-Maximum-Sum'

describe('k items with maximum sum test case 🥇', () => {
  it('should return the expected result', () => {
    const numOnes = 3
    const numZeros = 2
    const numNegOnes = 0
    const k = 2
    const result = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('k items with maximum sum test case 🥈', () => {
  it('should return the expected result', () => {
    const numOnes = 3
    const numZeros = 2
    const numNegOnes = 0
    const k = 4
    const result = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('k items with maximum sum test case 🥉', () => {
  it('should return the expected result', () => {
    const numOnes = 3
    const numZeros = 2
    const numNegOnes = 3
    const k = 8
    const result = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)
    const expected = 0
    expect(result).toBe(expected)
  })
})

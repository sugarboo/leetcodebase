import { describe, expect, it } from 'vitest'
import { tupleSameProduct } from '../../code/medium/01726-Tuple-with-Same-Product'

describe('tuple with same product test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 4, 6]
    const result = tupleSameProduct(nums)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('tuple with same product test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 4, 5, 10]
    const result = tupleSameProduct(nums)
    const expected = 16
    expect(result).toBe(expected)
  })
})

describe('tuple with same product test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 4, 6, 8, 12]
    const result = tupleSameProduct(nums)
    const expected = 40
    expect(result).toBe(expected)
  })
})

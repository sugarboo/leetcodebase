import { describe, expect, it } from 'vitest'
import { maxAscendingSum } from '../../code/easy/01800-Maximum-Ascending-Subarray-Sum'

describe('maximum ascending subarray sum test case 🥇', () => {
  it('should return the expected result', () => {
    expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toBe(65)
  })
})

describe('maximum ascending subarray sum test case 🥈', () => {
  it('should return the expected result', () => {
    expect(maxAscendingSum([10, 20, 30, 40, 50])).toBe(150)
  })
})

describe('maximum ascending subarray sum test case 🥉', () => {
  it('should return the expected result', () => {
    expect(maxAscendingSum([1, 2, 3, 4, 5])).toBe(15)
  })
})

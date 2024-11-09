import { describe, expect, it } from 'vitest'
import { maximumProduct } from '../../code/easy/00628-Maximum-Product-of-Three-Numbers'

describe('maximum product of three numbers test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = maximumProduct(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('maximum product of three numbers test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = maximumProduct(nums)
    const expected = 24
    expect(result).toBe(expected)
  })
})

describe('maximum product of three numbers test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [-1, -2, -3]
    const result = maximumProduct(nums)
    const expected = -6
    expect(result).toBe(expected)
  })
})

describe('maximum product of three numbers test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [-1, -2, 3, -4, 0]
    const result = maximumProduct(nums)
    const expected = 24
    expect(result).toBe(expected)
  })
})

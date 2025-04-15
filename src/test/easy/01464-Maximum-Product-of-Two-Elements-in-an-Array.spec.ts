import { describe, expect, it } from 'vitest'
import { maxProduct } from '../../code/easy/01464-Maximum-Product-of-Two-Elements-in-an-Array'

describe('maximum product of two elements in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 4, 5, 2]
    const expected = 12
    expect(maxProduct(nums)).toBe(expected)
  })
})

describe('maximum product of two elements in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 5, 4, 5]
    const expected = 16
    expect(maxProduct(nums)).toBe(expected)
  })
})

describe('maximum product of two elements in an array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 7]
    const expected = 12
    expect(maxProduct(nums)).toBe(expected)
  })
})

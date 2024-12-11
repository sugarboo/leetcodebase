import { describe, expect, it } from 'vitest'
import { maximumBeauty } from '../../code/medium/02779-Maximum-Beauty-of-an-Array-After-Applying-Operation'

describe('maximum beauty of an array after applying operation test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [4, 6, 1, 2]
    const k = 2
    const result = maximumBeauty(nums, k)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum beauty of an array after applying operation test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [1, 1, 1, 1]
    const k = 10
    const result = maximumBeauty(nums, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum beauty of an array after applying operation test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [5, 57, 46]
    const k = 15
    const result = maximumBeauty(nums, k)
    const expected = 2
    expect(result).toBe(expected)
  })
})

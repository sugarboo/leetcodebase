import { describe, expect, it } from 'vitest'
import { repeatedNTimes } from '../../code/easy/00961-N-Repeated-Element-in-Size-2N-Array'

describe('n-repeated-element-in-size-2n-array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 3]
    const result = repeatedNTimes(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('n-repeated-element-in-size-2n-array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 2, 5, 3, 2]
    const result = repeatedNTimes(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('n-repeated-element-in-size-2n-array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [5, 1, 5, 2, 5, 3, 5, 4]
    const result = repeatedNTimes(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

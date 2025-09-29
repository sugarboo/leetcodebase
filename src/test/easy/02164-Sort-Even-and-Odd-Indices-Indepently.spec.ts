import { describe, expect, it } from 'vitest'
import { sortEvenOdd } from '../../code/easy/02164-Sort-Even-and-Odd-Indices-Indepently'

describe('sort even and odd indices independently test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [4, 1, 2, 3]
    const result = sortEvenOdd(nums)
    const expected = [2, 3, 4, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort even and odd indices independently test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 1]
    const result = sortEvenOdd(nums)
    const expected = [2, 1]
    expect(result).toStrictEqual(expected)
  })
})

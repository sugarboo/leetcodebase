import { describe, expect, it } from 'vitest'
import { maxAdjacentDistance } from '../../code/easy/03423-Maximum-Difference-Between-Adjacent-Elements-in-a-Circular-Array'

describe('maximum difference between adjacent elements in a circular array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 4]
    const result = maxAdjacentDistance(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('maximum difference between adjacent elements in a circular array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [-5, -10, -5]
    const result = maxAdjacentDistance(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

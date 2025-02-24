import { describe, expect, it } from 'vitest'
import { numIdenticalPairs } from '../../code/easy/01512-Number-of-Good-Pairs'

describe('number of good pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 1, 1, 3]
    const result = numIdenticalPairs(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('number of good pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1]
    const result = numIdenticalPairs(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('number of good pairs test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3]
    const result = numIdenticalPairs(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

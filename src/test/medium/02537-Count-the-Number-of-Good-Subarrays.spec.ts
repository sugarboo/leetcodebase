import { describe, expect, it } from 'vitest'
import { countGood } from '../../code/medium/02537-Count-the-Number-of-Good-Subarrays'

describe('count the number of good subarrays test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 1, 1]
    const k = 10
    const expected = 1
    const result = countGood(nums, k)
    expect(result).toBe(expected)
  })
})

describe('count the number of good subarrays test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 1, 4, 3, 2, 2, 4]
    const k = 2
    const expected = 4
    const result = countGood(nums, k)
    expect(result).toBe(expected)
  })
})

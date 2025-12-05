import { describe, expect, it } from 'vitest'
import { countPartitions } from '../../code/easy/03432-Count-Partitions-with-Even-Sum-Difference'

describe('count partitions with even sum difference test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [10, 10, 3, 7, 6]
    const result = countPartitions(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count partitions with even sum difference test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2]
    const result = countPartitions(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count partitions with even sum difference test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 4, 6, 8]
    const result = countPartitions(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

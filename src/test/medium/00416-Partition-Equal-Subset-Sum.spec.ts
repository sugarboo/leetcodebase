import { describe, expect, it } from 'vitest'
import { canPartition } from '../../code/medium/00416-Partition-Equal-Subset-Sum'

describe('partition equal subset sum test case 🥇', () => {
  it('should return the expected number', () => {
    const nums = [1, 5, 11, 5]
    const result = canPartition(nums)
    const expected = true
    expect(result).toEqual(expected)
  })
})

describe('partition equal subset sum test case 🥈', () => {
  it('should return the expected number', () => {
    const nums = [1, 2, 3, 5]
    const result = canPartition(nums)
    const expected = false
    expect(result).toEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/medium/03191-Minimum-Operations-To-Make-Binary-Array-Elements-Equal-to-One-I'

describe('minimum operations to make binary array elements equal to one I test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [0, 1, 1, 1, 0, 0]
    const result = minOperations(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum operations to make binary array elements equal to one I test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [0, 1, 1, 1]
    const result = minOperations(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

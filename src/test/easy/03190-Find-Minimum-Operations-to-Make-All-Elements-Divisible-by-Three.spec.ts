import { describe, expect, it } from 'vitest'
import { minimumOperations } from '../../code/easy/03190-Find-Minimum-Operations-to-Make-All-Elements-Divisible-by-Three'

describe('find minimum operations to make all elements divisible by three test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = minimumOperations(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('find minimum operations to make all elements divisible by three test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [3, 6, 9]
    const result = minimumOperations(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

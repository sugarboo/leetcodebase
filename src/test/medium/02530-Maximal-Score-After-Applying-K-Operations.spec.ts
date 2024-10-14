import { describe, expect, it } from 'vitest'
import { maxKelements } from '../../code/medium/02530-Maximal-Score-After-Applying-K-Operations'

describe('maximal score after applying K operations test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [10, 10, 10, 10, 10]
    const result = maxKelements(nums, 5)
    const expected = 50
    expect(result).toBe(expected)
  })
})

describe('maximal score after applying K operations test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 10, 3, 3, 3]
    const result = maxKelements(nums, 3)
    const expected = 17
    expect(result).toBe(expected)
  })
})

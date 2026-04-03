import { describe, expect, it } from 'vitest'
import { findTheArrayConcVal } from '../../code/easy/02562-Find-the-Array-Concatenation-Value'

describe('find the array concatenation value test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [7, 52, 2, 4]
    const result = findTheArrayConcVal(nums)
    const expected = 596
    expect(result).toBe(expected)
  })
})

describe('find the array concatenation value test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [5, 14, 13, 8, 12]
    const result = findTheArrayConcVal(nums)
    const expected = 673
    expect(result).toBe(expected)
  })
})

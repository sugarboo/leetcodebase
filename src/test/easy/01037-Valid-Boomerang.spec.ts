import { describe, expect, it } from 'vitest'
import { isBoomerang } from '../../code/easy/01037-Valid-Boomerang'

describe('valid boomerang test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [[1, 1], [2, 3], [3, 2]]
    const result = isBoomerang(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('valid boomerang test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [[1, 1], [2, 2], [3, 3]]
    const result = isBoomerang(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

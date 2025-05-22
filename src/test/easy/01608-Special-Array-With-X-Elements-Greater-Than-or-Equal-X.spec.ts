import { describe, expect, it } from 'vitest'
import { specialArray } from '../../code/easy/01608-Special-Array-With-X-Elements-Greater-Than-or-Equal-X'

describe('special array with x elements greater than or equal x test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 5]
    const result = specialArray(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('special array with x elements greater than or equal x test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [0, 0]
    const result = specialArray(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('special array with x elements greater than or equal x test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0, 4, 3, 0, 4]
    const result = specialArray(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('special array with x elements greater than or equal x test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [3, 6, 7, 7, 0]
    const result = specialArray(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

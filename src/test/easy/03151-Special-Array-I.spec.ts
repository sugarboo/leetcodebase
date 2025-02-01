import { describe, expect, it } from 'vitest'
import { isArraySpecial } from '../../code/easy/03151-Special-Array-I'

describe('special array I test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const result = isArraySpecial(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('special array I test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 1, 4]
    const result = isArraySpecial(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('special array I test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [4, 3, 1, 6]
    const result = isArraySpecial(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('special array I test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [2, 10]
    const result = isArraySpecial(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

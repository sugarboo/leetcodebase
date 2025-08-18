import { describe, expect, it } from 'vitest'
import { countQuadruplets } from '../../code/easy/01995-Count-Special-Quadruplets'

describe('count special quadruplets test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 6]
    const result = countQuadruplets(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count special quadruplets test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 1, 3, 5]
    const result = countQuadruplets(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count special quadruplets test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 3, 6, 4, 5]
    const result = countQuadruplets(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

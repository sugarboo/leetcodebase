import { describe, expect, it } from 'vitest'
import { minElement } from '../../code/easy/03300-minimum-element-after-replacement-with-digit-sum'

describe('minimum element after replacement with digit sum test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [10, 12, 13, 14]
    const result = minElement(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum element after replacement with digit sum test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = minElement(nums)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum element after replacement with digit sum test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [999, 19, 199]
    const result = minElement(nums)
    const expected = 10
    expect(result).toBe(expected)
  })
})

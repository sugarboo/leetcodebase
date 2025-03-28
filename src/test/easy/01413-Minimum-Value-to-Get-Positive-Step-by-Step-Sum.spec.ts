import { describe, expect, it } from 'vitest'
import { minStartValue } from '../../code/easy/01413-Minimum-Value-to-Get-Positive-Step-by-Step-Sum'

describe('minimum value to get positive step by step sum test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [-3, 2, -3, 4, 2]
    const result = minStartValue(arr)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('minimum value to get positive step by step sum test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2]
    const result = minStartValue(arr)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('minimum value to get positive step by step sum test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, -2, -3]
    const result = minStartValue(arr)
    const expected = 5
    expect(result).toBe(expected)
  })
})

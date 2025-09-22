import { describe, expect, it } from 'vitest'
import { maxFrequencyElements } from '../../code/easy/03005-Count-Elements-With-Maximum-Frequency'

describe('max frequency elements test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 2, 3, 1, 4]
    const result = maxFrequencyElements(nums)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('max frequency elements test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4, 5]
    const result = maxFrequencyElements(nums)
    const expected = 5
    expect(result).toBe(expected)
  })
})

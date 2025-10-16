import { describe, expect, it } from 'vitest'
import { digitSum } from '../../code/easy/02243-Calculate-Digit-Sum-of-a-String'

describe('calculate digit sum of a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '11111222223'
    const k = 3
    const result = digitSum(s, k)
    const expected = '135'
    expect(result).toBe(expected)
  })
})

describe('calculate digit sum of a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '00000000'
    const k = 3
    const result = digitSum(s, k)
    const expected = '000'
    expect(result).toBe(expected)
  })
})

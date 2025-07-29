import { describe, expect, it } from 'vitest'
import { largestOddNumber } from '../../code/easy/01903-Largest-Odd-Number-in-String'

describe('largest odd number in string test case 🥇', () => {
  it('should return the expected result', () => {
    const num = '52'
    const result = largestOddNumber(num)
    expect(result).toBe('5')
  })
})

describe('largest odd number in string test case 🥈', () => {
  it('should return the expected result', () => {
    const num = '4206'
    const result = largestOddNumber(num)
    expect(result).toBe('')
  })
})

describe('largest odd number in string test case 🥉', () => {
  it('should return the expected result', () => {
    const num = '35427'
    const result = largestOddNumber(num)
    expect(result).toBe('35427')
  })
})

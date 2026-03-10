import { describe, expect, it } from 'vitest'
import { countDigits } from '../../code/easy/02520-Count-the-Digits-That-Divide-a-Number'

describe('count the digits that divide a number test case 🥇', () => {
  it('should return the expected result', () => {
    const num = 7
    const result = countDigits(num)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count the digits that divide a number test case 🥈', () => {
  it('should return the expected result', () => {
    const num = 121
    const result = countDigits(num)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count the digits that divide a number test case 🥉', () => {
  it('should return the expected result', () => {
    const num = 1248
    const result = countDigits(num)
    const expected = 4
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { evenOddBit } from '../../code/easy/02595-Number-of-Even-and-Odd-Bits'

describe('count the number of vowel strings in range test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 50
    const result = evenOddBit(n)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('02595-Number-of-Even-and-Odd-Bits test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = evenOddBit(n)
    const expected = [0, 1]
    expect(result).toStrictEqual(expected)
  })
})

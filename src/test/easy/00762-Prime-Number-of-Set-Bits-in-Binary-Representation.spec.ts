import { describe, expect, it } from 'vitest'
import { countPrimeSetBits } from '../../code/easy/00762-Prime-Number-of-Set-Bits-in-Binary-Representation'

describe('prime number of set bits in binary representation test case 🥇', () => {
  it('should return the expected result', () => {
    const left = 6
    const right = 10
    const result = countPrimeSetBits(left, right)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('prime number of set bits in binary representation test case 🥈', () => {
  it('should return the expected result', () => {
    const left = 10
    const right = 15
    const result = countPrimeSetBits(left, right)
    const expected = 5
    expect(result).toBe(expected)
  })
})

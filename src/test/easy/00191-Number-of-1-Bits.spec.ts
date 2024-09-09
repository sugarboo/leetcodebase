import { describe, expect, it } from 'vitest'
import { hammingWeight } from '../../code/easy/00191-Number-of-1-Bits'

describe('number of 1 bits test case 🥇', () => {
  it('should return the expected number', () => {
    const n = 11
    const result = hammingWeight(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('number of 1 bits test case 🥈', () => {
  it('should return the expected number', () => {
    const n = 128
    const result = hammingWeight(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('number of 1 bits test case 🥉', () => {
  it('should return the expected number', () => {
    const n = 2147483645
    const result = hammingWeight(n)
    const expected = 30
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { hammingDistance } from '../../code/easy/00461-Hamming-Distance'

describe('hamming distance test case 🥇', () => {
  it('should return the expected result', () => {
    const x = 1
    const y = 4
    const result = hammingDistance(x, y)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('hamming distance test case 🥈', () => {
  it('should return the expected result', () => {
    const x = 3
    const y = 1
    const result = hammingDistance(x, y)
    const expected = 1
    expect(result).toBe(expected)
  })
})

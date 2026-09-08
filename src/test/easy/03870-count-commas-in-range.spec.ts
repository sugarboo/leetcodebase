import { describe, expect, it } from 'vitest'
import { countCommas } from '../../code/easy/03870-count-commas-in-range'

describe('count commas in range test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 1002
    const result = countCommas(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count commas in range test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 998
    const result = countCommas(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count commas in range test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 100000
    const result = countCommas(n)
    const expected = 99001
    expect(result).toBe(expected)
  })
})


describe('count commas in range test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 84567
    const result = countCommas(n)
    const expected = 83568
    expect(result).toBe(expected)
  })
})


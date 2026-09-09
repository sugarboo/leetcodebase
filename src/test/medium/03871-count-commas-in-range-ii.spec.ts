import { describe, expect, it } from 'vitest'
import { countCommas } from '../../code/medium/03871-count-commas-in-range-ii'

describe('count commas in range ii test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 1002
    const result = countCommas(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count commas in range ii test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 998
    const result = countCommas(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('count commas in range ii test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1004590
    const result = countCommas(n)
    const expected = 1008182
    expect(result).toBe(expected)
  })
})


describe('count commas in range ii test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 741
    const result = countCommas(n)
    const expected = 0
    expect(result).toBe(expected)
  })
})


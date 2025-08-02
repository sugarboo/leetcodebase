import { describe, expect, it } from 'vitest'
import { countTriples } from '../../code/easy/01925-Count-Square-Sum-Triples'

describe('count square sum triples test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const expected = 2
    const result = countTriples(n)
    expect(result).toBe(expected)
  })
})

describe('count square sum triples test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 10
    const expected = 4
    const result = countTriples(n)
    expect(result).toBe(expected)
  })
})

describe('count square sum triples test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1
    const expected = 0
    const result = countTriples(n)
    expect(result).toBe(expected)
  })
})

describe('count square sum triples test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 250
    const expected = 330
    const result = countTriples(n)
    expect(result).toBe(expected)
  })
})

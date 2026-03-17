import { describe, expect, it } from 'vitest'
import { distinctIntegers } from '../../code/easy/02549-Count-Distinct-Numbers-on-Board'

describe('count the distinct numbers on board test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = distinctIntegers(n)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('count the distinct numbers on board test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 31
    const result = distinctIntegers(n)
    const expected = 30
    expect(result).toBe(expected)
  })
})

describe('count the distinct numbers on board test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 1
    const result = distinctIntegers(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

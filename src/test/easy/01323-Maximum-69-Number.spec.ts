import { describe, expect, it } from 'vitest'
import { maximum69Number } from './../../code/easy/01323-Maximum-69-Number'

describe('maximum 69 number test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 9669
    const result = maximum69Number(n)
    const expected = 9969
    expect(result).toBe(expected)
  })
})

describe('maximum 69 number test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 9999
    const result = maximum69Number(n)
    const expected = 9999
    expect(result).toBe(expected)
  })
})

describe('maximum 69 number test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 9996
    const result = maximum69Number(n)
    const expected = 9999
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { addBinary } from '../../code/easy/00067-Add-Binary'

describe('add binary test case 🥇', () => {
  it('should return the expected sum', () => {
    const a = '11'
    const b = '1'
    const expected = '100'
    expect(addBinary(a, b)).toBe(expected)
  })
})

describe('add binary test case 🥈', () => {
  it('should return the expected sum', () => {
    const a = '1010'
    const b = '1011'
    const expected = '10101'
    expect(addBinary(a, b)).toBe(expected)
  })
})

describe('add binary test case 🥉', () => {
  it('should return the expected sum', () => {
    const a = '10111010'
    const b = '11111011'
    const expected = '110110101'
    expect(addBinary(a, b)).toBe(expected)
  })
})

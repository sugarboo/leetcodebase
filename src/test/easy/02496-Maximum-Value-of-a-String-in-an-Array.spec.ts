import { describe, expect, it } from 'vitest'
import { maximumValue } from '../../code/easy/02496-Maximum-Value-of-a-String-in-an-Array'

describe('maximum value of a string in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const strs = ['alic3', 'bob', '3', '4', '00000']
    const result = maximumValue(strs)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('maximum value of a string in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const strs = ['1', '01', '001', '0001']
    const result = maximumValue(strs)
    const expected = 1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { pivotInteger } from '../../code/easy/02485-Find-the-Pivot-Integer'

describe('find the pivot integer test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 8
    const result = pivotInteger(n)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('find the pivot integer test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 1
    const result = pivotInteger(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('find the pivot integer test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = pivotInteger(n)
    const expected = -1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { findContentChildren } from '../../code/easy/00455-Assign-Cookies'

describe('assign cookies test case 🥇', () => {
  it('should return the expected result', () => {
    const g = [1, 2, 3]
    const s = [1, 1]
    const result = findContentChildren(g, s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('assign cookies test case 🥈', () => {
  it('should return the expected result', () => {
    const g = [1, 2]
    const s = [1, 2, 3]
    const result = findContentChildren(g, s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('assign cookies test case 🥉', () => {
  it('should return the expected result', () => {
    const g = [10, 9, 8, 7]
    const s = [5, 6, 7, 8]
    const result = findContentChildren(g, s)
    const expected = 2
    expect(result).toBe(expected)
  })
})

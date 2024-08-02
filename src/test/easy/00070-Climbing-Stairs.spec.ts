import { describe, expect, it } from 'vitest'
import { climbStairs } from '../../code/easy/00070-Climbing-Stairs'

describe('climbing stairs test case 🥇', () => {
  it('should return the expected number', () => {
    const n = 2
    const expected = 2
    expect(climbStairs(n)).toBe(expected)
  })
})

describe('climbing stairs test case 🥈', () => {
  it('should return the expected number', () => {
    const n = 3
    const expected = 3
    expect(climbStairs(n)).toBe(expected)
  })
})

describe('climbing stairs test case 🥉', () => {
  it('should return the expected number', () => {
    const n = 45
    const expected = 1836311903
    expect(climbStairs(n)).toBe(expected)
  })
})

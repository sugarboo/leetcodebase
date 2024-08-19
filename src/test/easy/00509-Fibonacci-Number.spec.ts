import { describe, expect, it } from 'vitest'
import { fib } from '../../code/easy/00509-Fibonacci-Number'

describe('fibonacci number test case 🥇', () => {
  it('should return the expected number', () => {
    const n = 2
    const result = fib(n)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('fibonacci number test case 🥈', () => {
  it('should return the expected number', () => {
    const n = 3
    const result = fib(n)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('fibonacci number test case 🥉', () => {
  it('should return the expected number', () => {
    const n = 4
    const result = fib(n)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('fibonacci number test case 🏅', () => {
  it('should return the expected number', () => {
    const n = 20
    const result = fib(n)
    const expected = 6765
    expect(result).toBe(expected)
  })
})

import { describe, expect, it, vi } from 'vitest'
import { memoize } from '../../code/medium/02623-Memoize'
import { fib } from '../../code/easy/00509-Fibonacci-Number'

describe('memoize test case 🥇', () => {
  it('should return the expected result', () => {
    const sum = (a: number, b: number) => a + b
    const mockFn = vi.fn(sum)
    const memoizeFn = memoize(mockFn)
    expect(memoizeFn(2, 2)).toBe(4)
    expect(memoizeFn(2, 2)).toBe(4)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(memoizeFn(2, 3)).toBe(5)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})

describe('memoize test case 🥈', () => {
  it('should return the expected result', () => {
    const factorial = n => (n <= 1) ? 1 : (n * factorial(n - 1))
    const mockFn = vi.fn(factorial)
    const memoizeFn = memoize(mockFn)
    expect(memoizeFn(2)).toBe(2)
    expect(memoizeFn(3)).toBe(6)
    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(memoizeFn(2)).toBe(2)
    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(memoizeFn(3)).toBe(6)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})

describe('memoize test case 🥉', () => {
  it('should return the expected result', () => {
    const mockFn = vi.fn(fib)
    const memoizeFn = memoize(mockFn)
    expect(memoizeFn(6)).toBe(8)
    expect(memoizeFn(6)).toBe(8)
    expect(memoizeFn(6)).toBe(8)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

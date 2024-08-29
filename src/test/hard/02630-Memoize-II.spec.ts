import { describe, expect, it, vi } from 'vitest'
import { memoize } from '../../code/hard/02630-Memoize-II'

describe('memoize test case 🥇', () => {
  it('should return the expected result', () => {
    const sum = (a: number, b: number) => a + b
    const mockFn = vi.fn(sum)
    const memoizeFn = memoize(mockFn)
    expect(memoizeFn(2, 2)).toBe(4)
    expect(memoizeFn(2, 2)).toBe(4)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(memoizeFn(1, 2)).toBe(3)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})

describe('memoize test case 🥈', () => {
  it('should return the expected result', () => {
    const fn = (a, b) => {
      return {
        ...a,
        ...b,
      }
    }
    const mockFn = vi.fn(fn)
    const memoizeFn = memoize(mockFn)
    expect(memoizeFn({}, {})).toStrictEqual({})
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(memoizeFn({}, {})).toStrictEqual({})
    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(memoizeFn({}, {})).toStrictEqual({})
    expect(mockFn).toHaveBeenCalledTimes(3)
  })
})

describe('memoize test case 🥉', () => {
  it('should return the expected result', () => {
    const fn = (a, b) => {
      return {
        ...a,
        ...b,
      }
    }
    const mockFn = vi.fn(fn)
    const memoizeFn = memoize(mockFn)
    const o = {}
    expect(memoizeFn(o, o)).toStrictEqual({})
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(memoizeFn(o, o)).toStrictEqual({})
    expect(memoizeFn(o, o)).toStrictEqual({})
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

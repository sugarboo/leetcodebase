import { describe, expect, it } from 'vitest'
import type { Fn } from '../../code/easy/02626-Array-Reduce-Transformation'
import { reduce } from '../../code/easy/02626-Array-Reduce-Transformation'

describe('array reduce transformation test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const fn: Fn = (accum, curr) => accum + curr
    const init = 0
    const result = reduce(nums, fn, init)

    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('array reduce transformation test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const fn: Fn = (accum, curr) => accum + curr * curr
    const init = 100
    const result = reduce(nums, fn, init)

    const expected = 130
    expect(result).toBe(expected)
  })
})

describe('array reduce transformation test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = []
    const fn: Fn = (accum, curr) => 0
    const init = 25
    const result = reduce(nums, fn, init)

    const expected = 25
    expect(result).toBe(expected)
  })
})

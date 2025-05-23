import { describe, expect, it } from 'vitest'
import { trimMean } from '../../code/easy/01619-Mean-of-Array-After-Removing-Some-Elements'

describe('mean of array after removing some elements test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]
    const result = trimMean(arr)
    const expected = 2.00000
    expect(result - expected).toBeLessThanOrEqual(1e-5)
  })
})

describe('mean of array after removing some elements test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]
    const result = trimMean(arr)
    const expected = 4.00000
    expect(result - expected).toBeLessThanOrEqual(1e-5)
  })
})

describe('mean of array after removing some elements test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]
    const result = trimMean(arr)
    const expected = 4.77778
    expect(result - expected).toBeLessThanOrEqual(1e-5)
  })
})

describe('mean of array after removing some elements test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 3, 4]
    const result = trimMean(arr)
    const expected = 2.50000
    expect(result - expected).toBeLessThanOrEqual(1e-5)
  })
})

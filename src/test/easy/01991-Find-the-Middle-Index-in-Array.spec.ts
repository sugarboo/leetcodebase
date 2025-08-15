import { describe, expect, it } from 'vitest'
import { findMiddleIndex } from '../../code/easy/01991-Find-the-Middle-Index-in-Array'

describe('find the middle index in array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, -1, 8, 4]
    const result = findMiddleIndex(nums)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('find the middle index in array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, -1, 4]
    const result = findMiddleIndex(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('find the middle index in array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [2, 5]
    const result = findMiddleIndex(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('find the middle index in array test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [8, 3, 4, 5, 6, 7, 9, 0, 10]
    const result = findMiddleIndex(nums)
    const expected = -1
    expect(result).toBe(expected)
  })
})

describe('find the middle index in array test case 🏆', () => {
  it('should return the expected result', () => {
    const nums = [1]
    const result = findMiddleIndex(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

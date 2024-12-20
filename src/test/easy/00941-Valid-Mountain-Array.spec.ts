import { describe, expect, it } from 'vitest'
import { validMountainArray } from '../../code/easy/00941-Valid-Mountain-Array'

describe('valid mountain array test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [2, 1]
    const result = validMountainArray(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('valid mountain array test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [3, 5, 5]
    const result = validMountainArray(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('valid mountain array test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [0, 3, 2, 1]
    const result = validMountainArray(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

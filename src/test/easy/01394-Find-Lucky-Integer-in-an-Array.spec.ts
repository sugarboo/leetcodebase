import { describe, expect, it } from 'vitest'
import { findLucky } from '../../code/easy/01394-Find-Lucky-Integer-in-an-Array'

describe('find lucky integer in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [2, 2, 3, 4]
    const result = findLucky(arr)
    const expected = 2
    expect(result).toEqual(expected)
  })
})

describe('find lucky integer in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 2, 3, 3, 3]
    const result = findLucky(arr)
    const expected = 3
    expect(result).toEqual(expected)
  })
})

describe('find lucky integer in an array test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [2, 2, 2, 3, 3]
    const result = findLucky(arr)
    const expected = -1
    expect(result).toEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { maxDistance } from '../../code/easy/02078-Two-Furthest-Houses-With-Different-Colors'

describe('two furthest houses with different colors test case 🥇', () => {
  it('should return the expected result', () => {
    const colors = [1, 1, 1, 6, 1, 1, 1]
    const result = maxDistance(colors)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('two furthest houses with different colors test case 🥈', () => {
  it('should return the expected result', () => {
    const colors = [1, 8, 3, 8, 3]
    const result = maxDistance(colors)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('two furthest houses with different colors test case 🥉', () => {
  it('should return the expected result', () => {
    const colors = [0, 1]
    const result = maxDistance(colors)
    const expected = 1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { uniqueOccurrences } from '../../code/easy/01207-Unique-Number-of-Occurrences'

describe('unique number of occurrences test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 2, 1, 1, 3]
    const result = uniqueOccurrences(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('unique number of occurrences test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2]
    const result = uniqueOccurrences(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('unique number of occurrences test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
    const result = uniqueOccurrences(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

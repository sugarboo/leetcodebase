import { describe, expect, it } from 'vitest'
import { canFormArray } from '../../code/easy/01640-Check-Array-Formation-Through-Concatenation'

describe('largest substring between two equal characters test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [15, 88]
    const pieces = [[88], [15]]
    const result = canFormArray(arr, pieces)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [49, 18, 16]
    const pieces = [[16, 18, 49]]
    const result = canFormArray(arr, pieces)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('largest substring between two equal characters test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [91, 4, 64, 78]
    const pieces = [[78], [4, 64], [91]]
    const result = canFormArray(arr, pieces)
    const expected = true
    expect(result).toBe(expected)
  })
})

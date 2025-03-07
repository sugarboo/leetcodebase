import { describe, expect, it } from 'vitest'
import { containsPattern } from '../../code/easy/01566-Detect-Pattern-of-Length-M-Repeated-K-or-More-Times'

describe('detect pattern of length m repeated k or more times test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 4, 4, 4, 4]
    const m = 1
    const k = 3
    const result = containsPattern(arr, m, k)
    const expected = true
    expect(result).toEqual(expected)
  })
})

describe('detect pattern of length m repeated k or more times test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 1, 2, 1, 1, 1, 3]
    const m = 2
    const k = 2
    const result = containsPattern(arr, m, k)
    const expected = true
    expect(result).toEqual(expected)
  })
})

describe('detect pattern of length m repeated k or more times test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 1, 2, 1, 3]
    const m = 2
    const k = 3
    const result = containsPattern(arr, m, k)
    const expected = false
    expect(result).toEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { sumZero } from './../../code/easy/01304-Find-N-Unique-Integers-Sum-up-to-Zero'

describe('find n unique integers sum up to zero test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 3
    const result = sumZero(n)
    const expected = [0, 1, -1]
    expect(result).toEqual(expected)
  })
})

describe('find n unique integers sum up to zero test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 4
    const result = sumZero(n)
    const expected = [1, -1, 2, -2]
    expect(result).toEqual(expected)
  })
})

describe('find n unique integers sum up to zero test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 5
    const result = sumZero(n)
    const expected = [0, 1, -1, 2, -2]
    expect(result).toEqual(expected)
  })
})

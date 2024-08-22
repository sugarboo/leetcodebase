import { describe, expect, it } from 'vitest'
import { flat } from '../../code/medium/02625-Flatten-Deeply-Nested-Array'

describe('flatten deeply nested array test case 🥇', () => {
  it('should return the expected array', () => {
    const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    const n = 0
    const result = flat(input, n)
    const expected = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    expect(result).toStrictEqual(expected)
  })
})

describe('flatten deeply nested array test case 🥈', () => {
  it('should return the expected array', () => {
    const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    const n = 1
    const result = flat(input, n)
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
    expect(result).toStrictEqual(expected)
  })
})

describe('flatten deeply nested array test case 🥉', () => {
  it('should return the expected array', () => {
    const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    const n = 2
    const result = flat(input, n)
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    expect(result).toStrictEqual(expected)
  })
})

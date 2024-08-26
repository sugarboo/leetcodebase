import { describe, expect, it } from 'vitest'
import { compactObject } from '../../code/medium/02705-Compact-Object'

describe('compact object test case 🥇', () => {
  it('should return the expected result', () => {
    const obj = [null, 0, false, 1]
    const result = compactObject(obj)
    const expected = [1]
    expect(result).toStrictEqual(expected)
  })
})

describe('compact object test case 🥈', () => {
  it('should return the expected result', () => {
    const obj = { a: null, b: [false, 1] }
    const result = compactObject(obj)
    const expected = { b: [1] }
    expect(result).toStrictEqual(expected)
  })
})

describe('compact object test case 🥉', () => {
  it('should return the expected result', () => {
    const obj = [null, 0, 5, [0], [false, 16]]
    const result = compactObject(obj)
    const expected = [5, [], [16]]
    expect(result).toStrictEqual(expected)
  })
})

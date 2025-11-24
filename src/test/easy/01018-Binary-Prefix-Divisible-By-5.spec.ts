import { describe, expect, it } from 'vitest'
import { prefixesDivBy5 } from '../../code/easy/01018-Binary-Prefix-Divisible-By-5'

describe('prefixes-divisible-by-5 test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [0, 1, 1]
    const result = prefixesDivBy5(arr)
    const expected = [true, false, false]
    expect(result).toStrictEqual(expected)
  })
})

describe('prefixes-divisible-by-5 test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 1, 1]
    const result = prefixesDivBy5(arr)
    const expected = [false, false, false]
    expect(result).toStrictEqual(expected)
  })
})

describe('prefixes-divisible-by-5 test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 1, 0, 0, 0, 1, 0, 0, 1]
    const result = prefixesDivBy5(arr)
    const expected = [false, false, false, false, false, false, false, false, false]
    expect(result).toStrictEqual(expected)
  })
})

describe('prefixes-divisible-by-5 test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]
    const result = prefixesDivBy5(arr)
    const expected = [false, false, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false]
    expect(result).toStrictEqual(expected)
  })
})

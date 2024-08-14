import { describe, expect, it } from 'vitest'
import { sortBy } from '../../code/easy/02724-Sort-By'

describe('sort by test case 🥇', () => {
  it('should return the expected array', () => {
    const arr = [5, 4, 1, 2, 3]
    const fn = x => x
    const result = sortBy(arr, fn)
    const expected = [1, 2, 3, 4, 5]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort by test case 🥈', () => {
  it('should return the expected array', () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }]
    const fn = x => x.x
    const result = sortBy(arr, fn)
    const expected = [{ x: -1 }, { x: 0 }, { x: 1 }]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort by test case 🥉', () => {
  it('should return the expected array', () => {
    const arr = [[3, 4], [5, 2], [10, 1]]
    const fn = x => x[1]
    const result = sortBy(arr, fn)
    const expected = [[10, 1], [5, 2], [3, 4]]
    expect(result).toStrictEqual(expected)
  })
})

describe('sort by test case 🏅', () => {
  it('should return the expected array', () => {
    const arr = [5, 4, 2, 1, 3, 6]
    const fn = x => -x
    const result = sortBy(arr, fn)
    const expected = [6, 5, 4, 3, 2, 1]
    expect(result).toStrictEqual(expected)
  })
})

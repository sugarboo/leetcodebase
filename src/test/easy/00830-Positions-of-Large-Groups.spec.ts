import { describe, expect, it } from 'vitest'
import { largeGroupPositions } from '../../code/easy/00830-Positions-of-Large-Groups'

describe('positions of large groups test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'abbxxxxzzy'
    const result = largeGroupPositions(s)
    const expected = [[3, 6]]
    expect(result).toStrictEqual(expected)
  })
})

describe('positions of large groups test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'abc'
    const result = largeGroupPositions(s)
    const expected = []
    expect(result).toStrictEqual(expected)
  })
})

describe('positions of large groups test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'abcdddeeeeaabbbcd'
    const result = largeGroupPositions(s)
    const expected = [[3, 5], [6, 9], [12, 14]]
    expect(result).toStrictEqual(expected)
  })
})

describe('positions of large groups test case 🏅', () => {
  it('should return the expected result', () => {
    const s = 'aaa'
    const result = largeGroupPositions(s)
    const expected = [[0, 2]]
    expect(result).toStrictEqual(expected)
  })
})

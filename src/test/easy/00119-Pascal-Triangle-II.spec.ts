import { describe, expect, it } from 'vitest'
import { getRow } from '../../code/easy/00119-Pascal-Triangle-II'

describe('pascal triangle II test case 🥇', () => {
  it('should return the expected array', () => {
    const result = getRow(4)
    const expected = [1, 4, 6, 4, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('pascal triangle II test case 🥈', () => {
  it('should return the expected array', () => {
    const result = getRow(0)
    const expected = [1]
    expect(result).toStrictEqual(expected)
  })
})

describe('pascal triangle II test case 🥉', () => {
  it('should return the expected array', () => {
    const result = getRow(5)
    const expected = [1, 5, 10, 10, 5, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('pascal triangle II test case 🏅', () => {
  it('should return the expected array', () => {
    const result = getRow(6)
    const expected = [1, 6, 15, 20, 15, 6, 1]
    expect(result).toStrictEqual(expected)
  })
})

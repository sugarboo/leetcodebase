import { describe, expect, it } from 'vitest'
import { constructRectangle } from '../../code/easy/00492-Construct-the-Rectangle'

describe('construct the rectangle test case 🥇', () => {
  it('should return the expected result', () => {
    const area = 4
    const result = constructRectangle(area)
    const expected = [2, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('construct the rectangle test case 🥈', () => {
  it('should return the expected result', () => {
    const area = 37
    const result = constructRectangle(area)
    const expected = [37, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('construct the rectangle test case 🥉', () => {
  it('should return the expected result', () => {
    const area = 122122
    const result = constructRectangle(area)
    const expected = [427, 286]
    expect(result).toStrictEqual(expected)
  })
})

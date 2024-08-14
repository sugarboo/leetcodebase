import { describe, expect, it } from 'vitest'
import { filter } from '../../code/easy/02634-Filter-Elements-from-Array'

describe('function composition test case 🥇', () => {
  it('should return the expected array', () => {
    const greaterThan10 = n => n > 10
    const arr = [0, 10, 20, 30]
    const expected = [20, 30]
    expect(filter(arr, greaterThan10)).toStrictEqual(expected)
  })
})

describe('function composition test case 🥈', () => {
  it('should return the expected array', () => {
    const firstIndex = (n, i) => i === 0
    const arr = [1, 2, 3]
    const expected = [1]
    expect(filter(arr, firstIndex)).toStrictEqual(expected)
  })
})

describe('function composition test case 🥉', () => {
  it('should return the expected array', () => {
    const plusOne = n => n + 1
    const arr = [-2, -1, 0, 1, 2]
    const expected = [-2, 0, 1, 2]
    expect(filter(arr, plusOne)).toStrictEqual(expected)
  })
})

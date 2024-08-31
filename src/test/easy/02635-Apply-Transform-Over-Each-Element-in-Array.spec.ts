import { describe, expect, it } from 'vitest'
import { map } from '../../code/easy/02635-Apply-Transform-Over-Each-Element-in-Array'

describe('apply transform over each element in array test case 🥇', () => {
  it('should return the expected array', () => {
    const plusOne = n => n + 1
    const arr = [1, 2, 3]
    const expected = [2, 3, 4]
    expect(map(arr, plusOne)).toStrictEqual(expected)
  })
})

describe('apply transform over each element in array test case 🥈', () => {
  it('should return the expected array', () => {
    const plusI = (n, i) => n + i
    const arr = [1, 2, 3]
    const expected = [1, 3, 5]
    expect(map(arr, plusI)).toStrictEqual(expected)
  })
})

describe('apply transform over each element in array test case 🥉', () => {
  it('should return the expected array', () => {
    const constant = (_n, _i) => 42
    const arr = [10, 20, 30]
    const expected = [42, 42, 42]
    expect(map(arr, constant)).toStrictEqual(expected)
  })
})

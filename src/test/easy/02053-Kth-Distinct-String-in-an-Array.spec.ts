import { describe, expect, it } from 'vitest'
import { kthDistinct } from '../../code/easy/02053-Kth-Distinct-String-in-an-Array'

describe('kth distinct string in an array test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = ['d', 'b', 'c', 'b', 'c', 'a']
    const k = 2
    const result = kthDistinct(arr, k)
    const expected = 'a'
    expect(result).toBe(expected)
  })
})

describe('kth distinct string in an array test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = ['aaa', 'aa', 'a']
    const k = 1
    const result = kthDistinct(arr, k)
    const expected = 'aaa'
    expect(result).toBe(expected)
  })
})

describe('kth distinct string in an array test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = ['a', 'b', 'a']
    const k = 3
    const result = kthDistinct(arr, k)
    const expected = ''
    expect(result).toBe(expected)
  })
})

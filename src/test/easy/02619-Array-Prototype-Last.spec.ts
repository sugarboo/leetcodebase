import { describe, expect, it } from 'vitest'
import { last } from '../../code/easy/02619-Array-Prototype-Last'

describe('array prototype last test case 🥇', () => {
  it('should return the expected element', () => {
    const arr = [null, {}, 3]
    const expected = 3
    expect(last.call(arr)).toBe(expected)
  })
})

describe('array prototype last test case 🥈', () => {
  it('should return the expected element', () => {
    const arr = []
    const expected = -1
    expect(last.call(arr)).toBe(expected)
  })
})

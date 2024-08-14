import { describe, expect, it } from 'vitest'
import { ArrayWrapper } from '../../code/easy/02695-Array-Wrapper'

describe('array wrapper test case 🥇', () => {
  it('should return the expected result', () => {
    const obj1 = new ArrayWrapper([1, 2])
    const obj2 = new ArrayWrapper([3, 4])
    const result = Number(obj1) + Number(obj2)
    const expected = 10
    expect(result).toBe(expected)
  })
})

describe('array wrapper test case 🥈', () => {
  it('should return the expected result', () => {
    const obj1 = new ArrayWrapper([23, 98, 42, 70])
    const result = String(obj1)
    const expected = '[23,98,42,70]'
    expect(result).toBe(expected)
  })
})

describe('array wrapper test case 🥉', () => {
  it('should return the expected result', () => {
    const obj1 = new ArrayWrapper([])
    const obj2 = new ArrayWrapper([])
    const result = Number(obj1) + Number(obj2)
    const expected = 0
    expect(result).toBe(expected)
  })
})

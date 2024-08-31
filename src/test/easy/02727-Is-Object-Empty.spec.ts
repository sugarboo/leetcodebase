import { describe, expect, it } from 'vitest'
import { isEmpty } from '../../code/easy/02727-Is-Object-Empty'

describe('is object empty test case 🥇', () => {
  it('should return the expected result', () => {
    const obj = { x: 5, y: 42 }
    const result = isEmpty(obj)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('is object empty test case 🥈', () => {
  it('should return the expected result', () => {
    const obj = {}
    const result = isEmpty(obj)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('is object empty test case 🥉', () => {
  it('should return the expected result', () => {
    const obj = [null, false, 0]
    const result = isEmpty(obj)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('is object empty test case 🏅', () => {
  it('should return the expected result', () => {
    const obj = []
    const result = isEmpty(obj)
    const expected = true
    expect(result).toBe(expected)
  })
})

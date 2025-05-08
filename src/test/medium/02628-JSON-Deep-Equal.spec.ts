import { describe, expect, it } from 'vitest'
import { areDeeplyEqual } from '../../code/medium/02628-JSON-Deep-Equal'

describe('json deep equal test case 🥇', () => {
  it('should return the expected result', () => {
    const o1 = { x: 1, y: 2 }
    const o2 = { x: 1, y: 2 }
    const result = areDeeplyEqual(o1, o2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('json deep equal test case 🥈', () => {
  it('should return the expected result', () => {
    const o1 = { y: 2, x: 1 }
    const o2 = { x: 1, y: 2 }
    const result = areDeeplyEqual(o1, o2)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('json deep equal test case 🥉', () => {
  it('should return the expected result', () => {
    const o1 = { x: null, L: [1, 2, 3] }
    const o2 = { x: null, L: ['1', '2', '3'] }
    const result = areDeeplyEqual(o1, o2)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('json deep equal test case 🏅', () => {
  it('should return the expected result', () => {
    const o1 = true
    const o2 = false
    const result = areDeeplyEqual(o1, o2)
    const expected = false
    expect(result).toBe(expected)
  })
})

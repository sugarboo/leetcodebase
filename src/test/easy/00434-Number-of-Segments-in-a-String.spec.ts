import { describe, expect, it } from 'vitest'
import { countSegments } from '../../code/easy/00434-Number-of-Segments-in-a-String'

describe('number of segments in a string test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'Hello, my name is John'
    const result = countSegments(s)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('number of segments in a string test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'Hello'
    const result = countSegments(s)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('number of segments in a string test case 🥉', () => {
  it('should return the expected result', () => {
    const s = ', , , ,        a, eaefa'
    const result = countSegments(s)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('number of segments in a string test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '  '
    const result = countSegments(s)
    const expected = 0
    expect(result).toBe(expected)
  })
})

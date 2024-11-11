import { describe, expect, it } from 'vitest'
import { calPoints } from '../../code/easy/00682-Baseball-Game'

describe('baseball game test case 🥇', () => {
  it('should return the expected result', () => {
    const operations = ['5', '2', 'C', 'D', '+']
    const result = calPoints(operations)
    const expected = 30
    expect(result).toBe(expected)
  })
})

describe('baseball game test case 🥈', () => {
  it('should return the expected result', () => {
    const operations = ['5', '-2', '4', 'C', 'D', '9', '+', '+']
    const result = calPoints(operations)
    const expected = 27
    expect(result).toBe(expected)
  })
})

describe('baseball game test case 🥉', () => {
  it('should return the expected result', () => {
    const operations = ['1', 'C']
    const result = calPoints(operations)
    const expected = 0
    expect(result).toBe(expected)
  })
})

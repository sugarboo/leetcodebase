import { describe, expect, it } from 'vitest'
import { lastStoneWeight } from '../../code/easy/01046-Last-Stone-Weight'

describe('last stone weight test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [2, 7, 4, 1, 8, 1]
    const result = lastStoneWeight(arr)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('last stone weight test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1]
    const result = lastStoneWeight(arr)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('last stone weight test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [8, 10, 4]
    const result = lastStoneWeight(arr)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('last stone weight test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [2, 2]
    const result = lastStoneWeight(arr)
    const expected = 0
    expect(result).toBe(expected)
  })
})

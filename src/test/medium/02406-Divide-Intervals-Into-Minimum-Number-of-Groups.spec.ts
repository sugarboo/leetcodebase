import { describe, expect, it } from 'vitest'
import { minGroups } from '../../code/medium/02406-Divide-Intervals-Into-Minimum-Number-of-Groups'

describe('divide intervals into minimum number of groups test case 🥇', () => {
  it('should return the expected result', () => {
    const intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]
    const result = minGroups(intervals)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('divide intervals into minimum number of groups test case 🥈', () => {
  it('should return the expected result', () => {
    const intervals = [[1, 3], [5, 6], [8, 10], [11, 13]]
    const result = minGroups(intervals)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('divide intervals into minimum number of groups test case 🥉', () => {
  it('should return the expected result', () => {
    const intervals = [[1, 1000000], [100, 200000], [1000, 300000], [500000, 600000], [700000, 800000]]
    const result = minGroups(intervals)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('divide intervals into minimum number of groups test case 🏅', () => {
  it('should return the expected result', () => {
    const intervals = [[1, 5], [3, 8], [10, 15], [1, 5], [3, 8]]
    const result = minGroups(intervals)
    const expected = 4
    expect(result).toBe(expected)
  })
})

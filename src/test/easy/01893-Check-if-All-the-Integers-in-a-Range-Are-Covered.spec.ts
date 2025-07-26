import { describe, expect, it } from 'vitest'
import { isCovered } from '../../code/easy/01893-Check-if-All-the-Integers-in-a-Range-Are-Covered'

describe('check if all the integers in a range are covered test case 🥇', () => {
  it('should return the expected result', () => {
    const ranges = [[1, 2], [3, 4], [5, 6]]
    const left = 2
    const right = 5
    const result = isCovered(ranges, left, right)
    expect(result).toBe(true)
  })
})

describe('check if all the integers in a range are covered test case 🥈', () => {
  it('should return the expected result', () => {
    const ranges = [[1, 10], [10, 20]]
    const left = 21
    const right = 21
    const result = isCovered(ranges, left, right)
    expect(result).toBe(false)
  })
})

describe('check if all the integers in a range are covered test case 🥉', () => {
  it('should return the expected result', () => {
    const ranges = [[37, 49], [5, 17], [8, 32]]
    const left = 29
    const right = 49
    const result = isCovered(ranges, left, right)
    expect(result).toBe(false)
  })
})

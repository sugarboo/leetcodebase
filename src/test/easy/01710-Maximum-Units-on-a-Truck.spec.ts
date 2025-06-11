import { describe, expect, it } from 'vitest'
import { maximumUnits } from '../../code/easy/01710-Maximum-Units-on-a-Truck'

describe('maximum units on a truck test case 🥇', () => {
  it('should return the expected result', () => {
    const boxTypes = [[1, 3], [2, 2], [3, 1]]
    const truckSize = 4
    const result = maximumUnits(boxTypes, truckSize)
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('maximum units on a truck test case 🥈', () => {
  it('should return the expected result', () => {
    const boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]]
    const truckSize = 10
    const result = maximumUnits(boxTypes, truckSize)
    const expected = 91
    expect(result).toBe(expected)
  })
})

describe('maximum units on a truck test case 🥉', () => {
  it('should return the expected result', () => {
    const boxTypes = [[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]]
    const truckSize = 35
    const result = maximumUnits(boxTypes, truckSize)
    const expected = 76
    expect(result).toBe(expected)
  })
})

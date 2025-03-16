import { describe, expect, it } from 'vitest'
import { repairCars } from '../../code/medium/02594-Minimum-Time-to-Repair-Cars'

describe('minimum time to repair cars test case 🥇', () => {
  it('should return the expected result', () => {
    const ranks = [4, 2, 3, 1]
    const cars = 10
    const result = repairCars(ranks, cars)
    const expected = 16
    expect(result).toBe(expected)
  })
})

describe('minimum time to repair cars test case 🥈', () => {
  it('should return the expected result', () => {
    const ranks = [5, 1, 8]
    const cars = 6
    const result = repairCars(ranks, cars)
    const expected = 16
    expect(result).toBe(expected)
  })
})

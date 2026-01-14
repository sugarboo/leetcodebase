import { describe, expect, it } from 'vitest'
import { distanceTraveled } from '../../code/easy/02739-Total-Distance-Traveled'

describe('total distance traveled test case 🥇', () => {
  it('should return the expected result', () => {
    const mainTank = 5
    const additionalTank = 1
    const result = distanceTraveled(mainTank, additionalTank)
    const expected = 60
    expect(result).toBe(expected)
  })
})

describe('total distance traveled test case 🥈', () => {
  it('should return the expected result', () => {
    const mainTank = 1
    const additionalTank = 2
    const result = distanceTraveled(mainTank, additionalTank)
    const expected = 10
    expect(result).toBe(expected)
  })
})

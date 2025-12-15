import { describe, expect, it } from 'vitest'
import { countDaysTogether } from '../../code/easy/02409-Count-Days-Spent-Together'

describe('count days spent together test case 🥇', () => {
  it('should return the expected result', () => {
    const arriveAlice = '08-15'
    const leaveAlice = '08-18'
    const arriveBob = '08-16'
    const leaveBob = '08-19'
    const result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('count days spent together test case 🥈', () => {
  it('should return the expected result', () => {
    const arriveAlice = '10-01'
    const leaveAlice = '10-31'
    const arriveBob = '11-01'
    const leaveBob = '12-31'
    const result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)
    const expected = 0
    expect(result).toBe(expected)
  })
})

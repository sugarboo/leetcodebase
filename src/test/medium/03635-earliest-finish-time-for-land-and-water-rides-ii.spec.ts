import { describe, expect, it } from 'vitest'
import { earliestFinishTime } from '../../code/easy/03633-earliest-finish-time-for-land-and-water-rides-i'

describe('earliest finish time for land and water rides I test case 🥇', () => {
  it('should return the expected result', () => {
    const landStartTime = [2, 8]
    const landDuration = [4, 1]
    const waterStartTime = [6]
    const waterDuration = [3]
    const result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration)
    const expected = 9
    expect(result).toBe(expected)
  })
})

describe('earliest finish time for land and water rides I test case 🥈', () => {
  it('should return the expected result', () => {
    const landStartTime = [5]
    const landDuration = [3]
    const waterStartTime = [1]
    const waterDuration = [10]
    const result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration)
    const expected = 14
    expect(result).toBe(expected)
  })
})

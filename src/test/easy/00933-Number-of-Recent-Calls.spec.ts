import { describe, expect, it } from 'vitest'
import { RecentCounter } from '../../code/easy/00933-Number-of-Recent-Calls'

describe('number of recent calls test case 🥇', () => {
  it('should return the expected result', () => {
    const recentCounter = new RecentCounter()
    const result = recentCounter.ping(1)
    const expected = 1
    expect(result).toBe(expected)
    const result2 = recentCounter.ping(100)
    const expected2 = 2
    expect(result2).toBe(expected2)
    const result3 = recentCounter.ping(3001)
    const expected3 = 3
    expect(result3).toBe(expected3)
    const result4 = recentCounter.ping(3002)
    const expected4 = 3
    expect(result4).toBe(expected4)
  })
})

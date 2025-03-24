import { describe, expect, it } from 'vitest'
import { countDays } from '../../code/medium/03169-Count-Days-Without-Meetings'

describe('count days without meetings test case 🥇', () => {
  it('should return the expected result', async () => {
    const days = 10
    const meetings = [[5, 7], [1, 3], [9, 10]]
    const result = countDays(days, meetings)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count days without meetings test case 🥈', () => {
  it('should return the expected result', async () => {
    const days = 5
    const meetings = [[2, 4], [1, 3]]
    const result = countDays(days, meetings)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count days without meetings test case 🥉', () => {
  it('should return the expected result', async () => {
    const days = 6
    const meetings = [[1, 6]]
    const result = countDays(days, meetings)
    const expected = 0
    expect(result).toBe(expected)
  })
})

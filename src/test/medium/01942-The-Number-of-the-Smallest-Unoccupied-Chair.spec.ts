import { describe, expect, it } from 'vitest'
import { smallestChair } from '../../code/medium/01942-The-Number-of-the-Smallest-Unoccupied-Chair'

describe('the number of the smallest unoccupied chair test case 🥇', () => {
  it('should return the expected result', () => {
    const times = [[1, 4], [2, 3], [4, 6]]
    const targetFriend = 1
    const result = smallestChair(times, targetFriend)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('the number of the smallest unoccupied chair test case 🥈', () => {
  it('should return the expected result', () => {
    const times = [[3, 10], [1, 5], [2, 6]]
    const targetFriend = 0
    const result = smallestChair(times, targetFriend)
    const expected = 2
    expect(result).toBe(expected)
  })
})

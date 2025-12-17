import { describe, expect, it } from 'vitest'
import { hardestWorker } from '../../code/easy/02432-The-Employee-That-Worked-on-the-Longest-Task'

describe('the employee that worked on the longest task test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 6
    const logs = [[0, 5], [2, 5], [0, 9], [1, 12]]
    const result = hardestWorker(n, logs)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('the employee that worked on the longest task test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 26
    const logs = [[1, 1], [3, 7], [2, 12], [7, 17]]
    const result = hardestWorker(n, logs)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('the employee that worked on the longest task test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 2
    const logs = [[0, 10], [1, 20]]
    const result = hardestWorker(n, logs)
    const expected = 0
    expect(result).toBe(expected)
  })
})

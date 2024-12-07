import { describe, expect, it } from 'vitest'
import { minimumSize } from '../../code/medium/01760-Minimum-Limit-of-Balls-in-Bag'

describe('minimum limit of balls in bag test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [9]
    const maxOperations = 2
    const result = minimumSize(nums, maxOperations)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('minimum limit of balls in bag test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 4, 8, 2]
    const maxOperations = 4
    const result = minimumSize(nums, maxOperations)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum limit of balls in bag test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [7, 17]
    const maxOperations = 2
    const result = minimumSize(nums, maxOperations)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('minimum limit of balls in bag test case 🏅', () => {
  it('should return the expected result', () => {
    const nums = [556, 96, 205, 188, 505, 14, 602, 591, 802, 662, 543, 781, 878, 812, 539, 981, 587, 716, 531, 354, 92, 4, 412, 354, 607, 587, 28, 136, 327, 929, 905, 671, 811, 572, 152, 165, 352, 522, 983, 966, 378, 911, 873, 606, 392, 927, 426, 726, 892, 939, 96, 419, 769, 387, 178, 895, 41, 291, 437, 513, 37, 569, 945, 102, 460]
    const maxOperations = 33
    const result = minimumSize(nums, maxOperations)
    const expected = 531
    expect(result).toBe(expected)
  })
})

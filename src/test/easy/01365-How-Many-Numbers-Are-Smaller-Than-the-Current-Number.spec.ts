import { describe, expect, it } from 'vitest'
import { smallerNumbersThanCurrent } from '../../code/easy/01365-How-Many-Numbers-Are-Smaller-Than-the-Current-Number'

describe('how many numbers are smaller than the current number test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [8, 1, 2, 2, 3]
    const result = smallerNumbersThanCurrent(nums)
    const expected = [4, 0, 1, 1, 3]
    expect(result).toEqual(expected)
  })
})

describe('how many numbers are smaller than the current number test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [7, 7, 7, 7]
    const result = smallerNumbersThanCurrent(nums)
    const expected = [0, 0, 0, 0]
    expect(result).toEqual(expected)
  })
})

describe('how many numbers are smaller than the current number test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [6, 5, 4, 8]
    const result = smallerNumbersThanCurrent(nums)
    const expected = [2, 1, 0, 3]
    expect(result).toEqual(expected)
  })
})

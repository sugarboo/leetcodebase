import { describe, expect, it } from 'vitest'
import { removeElement } from '../../code/easy/00027-Remove-Element'

describe('remove element test case 🥇', () => {
  it('should return the expected array', () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const expected = 2
    expect(removeElement(nums, val)).toBe(expected)
  })
})

describe('remove element test case 🥈', () => {
  it('should return the expected array', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const expected = 5
    expect(removeElement(nums, val)).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../code/easy/00026-Duplicate-from-Sorted-Array'

describe('duplicate from sorted array test case 🥇', () => {
  it('should return the expected array', () => {
    const nums = [1, 1, 2]
    const expected = 2
    expect(removeDuplicates(nums)).toStrictEqual(expected)
  })
})

describe('duplicate from sorted array test case 🥈', () => {
  it('should return the expected array', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const expected = 5
    expect(removeDuplicates(nums)).toStrictEqual(expected)
  })
})

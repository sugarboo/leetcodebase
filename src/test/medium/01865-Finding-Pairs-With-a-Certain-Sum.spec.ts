import { describe, expect, it } from 'vitest'
import { FindSumPairs } from '../../code/medium/01865-Finding-Pairs-With-a-Certain-Sum'

describe('finding pairs with a certain sum test case 🥇', () => {
  it('should return the expected result', () => {
    const nums1 = [1, 1, 2, 2, 2, 3]
    const nums2 = [1, 4, 5, 2, 5, 4]
    const findSumPairs = new FindSumPairs(nums1, nums2)
    expect(findSumPairs.count(7)).toBe(8)
    findSumPairs.add(3, 2)
    expect(findSumPairs.count(8)).toBe(2)
    expect(findSumPairs.count(4)).toBe(1)
    findSumPairs.add(0, 1)
    findSumPairs.add(1, 1)
    expect(findSumPairs.count(7)).toBe(11)
  })
})

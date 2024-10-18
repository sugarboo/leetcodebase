import { describe, expect, it } from 'vitest'
import { countMaxOrSubsets } from '../../code/medium/02044-Count-Number-of-Maximum-Bitwise-OR-Subsets'

describe('count number of maximum bitwise-OR subsets test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 1]
    const result = countMaxOrSubsets(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('count number of maximum bitwise-OR subsets test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 2, 2]
    const result = countMaxOrSubsets(nums)
    const expected = 7
    expect(result).toBe(expected)
  })
})

describe('count number of maximum bitwise-OR subsets test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 1, 5]
    const result = countMaxOrSubsets(nums)
    const expected = 6
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { isArraySpecial } from '../../code/medium/03152-Special-Array-II'

describe('special array II test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [3, 4, 1, 2, 6]
    const queries = [[0, 4]]
    const result = isArraySpecial(nums, queries)
    const expected = [false]
    expect(result).toStrictEqual(expected)
  })
})

describe('special array II test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [4, 3, 1, 6]
    const queries = [[0, 2], [2, 3]]
    const result = isArraySpecial(nums, queries)
    const expected = [false, true]
    expect(result).toStrictEqual(expected)
  })
})

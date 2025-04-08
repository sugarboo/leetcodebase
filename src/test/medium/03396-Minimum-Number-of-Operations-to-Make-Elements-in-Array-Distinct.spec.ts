import { describe, expect, it } from 'vitest'
import { minimumOperations } from '../../code/medium/03396-Minimum-Number-of-Operations-to-Make-Elements-in-Array-Distinct'

describe('minimum number of operations to make elements in array distinct test case 🥇', () => {
  it('should return the expected result', async () => {
    const nums = [1, 2, 3, 4, 2, 3, 3, 5, 7]
    const result = minimumOperations(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to make elements in array distinct test case 🥈', () => {
  it('should return the expected result', async () => {
    const nums = [4, 5, 6, 4, 4]
    const result = minimumOperations(nums)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('minimum number of operations to make elements in array distinct test case 🥉', () => {
  it('should return the expected result', async () => {
    const nums = [6, 7, 8, 9]
    const result = minimumOperations(nums)
    const expected = 0
    expect(result).toBe(expected)
  })
})

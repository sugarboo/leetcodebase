import { describe, expect, it } from 'vitest'
import { getMaximumXor } from '../../code/medium/01829-Maximum-XOR-for-Each-Query'

describe('maximum XOR for each query test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 1, 3]
    const maximumBit = 2
    const result = getMaximumXor(nums, maximumBit)
    const expected = [0, 3, 2, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum XOR for each query test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [2, 3, 4, 7]
    const maximumBit = 3
    const result = getMaximumXor(nums, maximumBit)
    const expected = [5, 2, 6, 5]
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum XOR for each query test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [0, 1, 2, 2, 5, 7]
    const maximumBit = 3
    const result = getMaximumXor(nums, maximumBit)
    const expected = [4, 3, 6, 4, 6, 7]
    expect(result).toStrictEqual(expected)
  })
})

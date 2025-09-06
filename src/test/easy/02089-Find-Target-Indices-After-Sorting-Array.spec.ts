import { describe, expect, it } from 'vitest'
import { targetIndices } from '../../code/easy/02089-Find-Target-Indices-After-Sorting-Array'

describe('find target indices after sorting array test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 5, 2, 3]
    const target = 2
    const result = targetIndices(nums, target)
    const expected = [1, 2]
    expect(result).toStrictEqual(expected)
  })
})

describe('find target indices after sorting array test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 5, 2, 3]
    const target = 3
    const result = targetIndices(nums, target)
    const expected = [3]
    expect(result).toStrictEqual(expected)
  })
})

describe('find target indices after sorting array test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 5, 2, 3]
    const target = 5
    const result = targetIndices(nums, target)
    const expected = [4]
    expect(result).toStrictEqual(expected)
  })
})

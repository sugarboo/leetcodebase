import { describe, expect, it } from 'vitest'
import { divideArray } from '../../code/easy/02206-Divide-Array-Into-Equal-Pairs'

describe('divide array into equal pairs test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [3, 2, 3, 2, 2, 2]
    const result = divideArray(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('divide array into equal pairs test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = divideArray(nums)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('divide array into equal pairs test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 2]
    const result = divideArray(nums)
    const expected = true
    expect(result).toBe(expected)
  })
})

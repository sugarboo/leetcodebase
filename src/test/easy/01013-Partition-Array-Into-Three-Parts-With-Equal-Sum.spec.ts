import { describe, expect, it } from 'vitest'
import { canThreePartsEqualSum } from '../../code/easy/01013-Partition-Array-Into-Three-Parts-With-Equal-Sum'

describe('canThreePartsEqualSum test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
    const result = canThreePartsEqualSum(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('canThreePartsEqualSum test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
    const result = canThreePartsEqualSum(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('canThreePartsEqualSum test case 🥉', () => {
  it('should return the expected result', () => {
    const arr = [1, 1, 1, 1, 1]
    const result = canThreePartsEqualSum(arr)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('canThreePartsEqualSum test case 🏅', () => {
  it('should return the expected result', () => {
    const arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]
    const result = canThreePartsEqualSum(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('canThreePartsEqualSum test case 🏅🏅', () => {
  it('should return the expected result', () => {
    const arr = [0, 0, 0, 0, 0]
    const result = canThreePartsEqualSum(arr)
    const expected = true
    expect(result).toBe(expected)
  })
})

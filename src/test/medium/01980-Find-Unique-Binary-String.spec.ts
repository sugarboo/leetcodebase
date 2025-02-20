import { describe, expect, it } from 'vitest'
import { findDifferentBinaryString } from '../../code/medium/01980-Find-Unique-Binary-String'

describe('find unique binary string test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = ['01', '10']
    const expected = ['11', '00']
    const result = findDifferentBinaryString(nums)
    expect(expected).toContainEqual(result)
  })
})

describe('find unique binary string test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = ['00', '01']
    const expected = ['11', '10']
    const result = findDifferentBinaryString(nums)
    expect(expected).toContainEqual(result)
  })
})

describe('find unique binary string test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = ['111', '011', '001']
    const expected = ['000', '010', '100', '101', '110']
    const result = findDifferentBinaryString(nums)
    expect(expected).toContainEqual(result)
  })
})

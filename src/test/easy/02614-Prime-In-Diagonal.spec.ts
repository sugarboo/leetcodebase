import { describe, expect, it } from 'vitest'
import { diagonalPrime } from '../../code/easy/02614-Prime-In-Diagonal'

describe('prime in diagonal test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [[1, 2, 3], [5, 6, 7], [9, 10, 11]]
    const result = diagonalPrime(nums)
    const expected = 11
    expect(result).toBe(expected)
  })
})

describe('prime in diagonal test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [[1, 2, 3], [5, 17, 7], [9, 11, 10]]
    const result = diagonalPrime(nums)
    const expected = 17
    expect(result).toBe(expected)
  })
})

describe('prime in diagonal test case 🥉', () => {
  it('should return the expected result', () => {
    const nums = [[1, 2, 3], [5, 6, 7], [9, 10, 11]]
    const result = diagonalPrime(nums)
    const expected = 11
    expect(result).toBe(expected)
  })
})

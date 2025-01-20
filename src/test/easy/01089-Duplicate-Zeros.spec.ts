import { describe, expect, it } from 'vitest'
import { duplicateZeros } from '../../code/easy/01089-Duplicate-Zeros'

describe('duplicate zeros test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0]
    const result = duplicateZeros(arr)
    const expected = [1, 0, 0, 2, 3, 0, 0, 4]
    expect(result).toEqual(expected)
  })
})

describe('duplicate zeros test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 2, 3]
    const result = duplicateZeros(arr)
    const expected = [1, 2, 3]
    expect(result).toEqual(expected)
  })
})

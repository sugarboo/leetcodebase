import { describe, expect, it } from 'vitest'
import { sortByBits } from '../../code/easy/01356-Sort-Integers-by-The-Number-of-1-Bits'

describe('sort integers by the number of 1 bits test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const result = sortByBits(arr)
    const expected = [0, 1, 2, 4, 8, 3, 5, 6, 7]
    expect(result).toEqual(expected)
  })
})

describe('sort integers by the number of 1 bits test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
    const result = sortByBits(arr)
    const expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
    expect(result).toEqual(expected)
  })
})

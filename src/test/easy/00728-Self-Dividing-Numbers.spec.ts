import { describe, expect, it } from 'vitest'
import { selfDividingNumbers } from '../../code/easy/00728-Self-Dividing-Numbers'

describe('self dividing numbers test case 🥇', () => {
  it('should return the expected result', () => {
    const result = selfDividingNumbers(1, 22)
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
    expect(result).toStrictEqual(expected)
  })
})

describe('self dividing numbers test case 🥈', () => {
  it('should return the expected result', () => {
    const result = selfDividingNumbers(47, 85)
    const expected = [48, 55, 66, 77]
    expect(result).toStrictEqual(expected)
  })
})

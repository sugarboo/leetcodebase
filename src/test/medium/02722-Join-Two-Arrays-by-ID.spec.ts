import { describe, expect, it } from 'vitest'
import { join } from '../../code/medium/02722-Join-Two-Arrays-by-ID'

describe('join two arrays by id test case 🥇', () => {
  it('should return the expected result', async () => {
    const arr1 = [{ id: 1, x: 1 }, { id: 2, x: 9 }]
    const arr2 = [{ id: 3, x: 5 }]
    const result = join(arr1, arr2)
    const expected = [{ id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 }]
    expect(result).toStrictEqual(expected)
  })
})

describe('join two arrays by id test case 🥈', () => {
  it('should return the expected result', async () => {
    const arr1 = [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }]
    const arr2 = [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }]
    const result = join(arr1, arr2)
    const expected = [{ id: 1, x: 2, y: 3 }, { id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }]
    expect(result).toStrictEqual(expected)
  })
})

describe('join two arrays by id test case 🥉', () => {
  it('should return the expected result', async () => {
    const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
    const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]
    const result = join(arr1, arr2)
    const expected = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]
    expect(result).toStrictEqual(expected)
  })
})

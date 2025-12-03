import { describe, expect, it } from 'vitest'
import { mergeSimilarItems } from '../../code/easy/02363-Merge-Similar-Items'

describe('merge similar items test case 🥇', () => {
  it('should return the expected result', () => {
    const items1 = [[1, 1], [4, 5], [3, 8]]
    const items2 = [[3, 1], [1, 5]]
    const result = mergeSimilarItems(items1, items2)
    const expected = [[1, 6], [3, 9], [4, 5]]
    expect(result).toStrictEqual(expected)
  })
})

describe('merge similar items test case 🥈', () => {
  it('should return the expected result', () => {
    const items1 = [[1, 1], [3, 2], [2, 3]]
    const items2 = [[2, 1], [3, 2], [1, 3]]
    const result = mergeSimilarItems(items1, items2)
    const expected = [[1, 4], [2, 4], [3, 4]]
    expect(result).toStrictEqual(expected)
  })
})

describe('merge similar items test case 🥉', () => {
  it('should return the expected result', () => {
    const items1 = [[1, 3], [2, 2]]
    const items2 = [[7, 1], [2, 2], [1, 4]]
    const result = mergeSimilarItems(items1, items2)
    const expected = [[1, 7], [2, 4], [7, 1]]
    expect(result).toStrictEqual(expected)
  })
})

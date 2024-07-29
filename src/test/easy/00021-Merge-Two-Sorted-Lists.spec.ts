import { describe, expect, it } from 'vitest'
import { mergeTwoSortedLists } from '../../code/easy/00021-Merge-Two-Sorted-Lists'

describe('merge two sorted lists test case 🥇', () => {
  it('should return the expected array', () => {
    const list1 = [1, 2, 4]
    const list2 = [1, 3, 4]
    const expected = [1, 1, 2, 3, 4, 4]
    expect(mergeTwoSortedLists(list1, list2)).toStrictEqual(expected)
  })
})

describe('merge two sorted lists test case 🥈', () => {
  it('should return the expected array', () => {
    const list1 = []
    const list2 = []
    const expected = []
    expect(mergeTwoSortedLists(list1, list2)).toStrictEqual(expected)
  })
})

describe('merge two sorted lists test case 🥉', () => {
  it('should return the expected array', () => {
    const list1 = []
    const list2 = [0]
    const expected = [0]
    expect(mergeTwoSortedLists(list1, list2)).toStrictEqual(expected)
  })
})

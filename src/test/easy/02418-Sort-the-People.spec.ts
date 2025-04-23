import { describe, expect, it } from 'vitest'
import { sortPeople } from '../../code/easy/02418-Sort-the-People'

describe('sort the people test case 🥇', () => {
  it('should return the expected result', () => {
    const names = ['Mary', 'John', 'Emma']
    const heights = [180, 165, 170]
    const result = sortPeople(names, heights)
    const expected = ['Mary', 'Emma', 'John']
    expect(result).toEqual(expected)
  })
})

describe('sort the people test case 🥈', () => {
  it('should return the expected result', () => {
    const names = ['Alice', 'Bob', 'Bob']
    const heights = [155, 185, 150]
    const result = sortPeople(names, heights)
    const expected = ['Bob', 'Alice', 'Bob']
    expect(result).toEqual(expected)
  })
})

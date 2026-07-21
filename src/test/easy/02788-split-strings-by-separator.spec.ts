import { describe, expect, it } from 'vitest'
import { splitWordsBySeparator } from '../../code/easy/02788-split-strings-by-separator'

describe('split strings by separator test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['one.two.three', 'four.five', 'six']
    const separator = '.'
    const result = splitWordsBySeparator(words, separator)
    const expected = ['one', 'two', 'three', 'four', 'five', 'six']
    expect(result).toStrictEqual(expected)
  })
})

describe('split strings by separator test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['$easy$', '$problem$']
    const separator = '$'
    const result = splitWordsBySeparator(words, separator)
    const expected = ['easy', 'problem']
    expect(result).toStrictEqual(expected)
  })
})

describe('split strings by separator test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['|||']
    const separator = '|'
    const result = splitWordsBySeparator(words, separator)
    const expected: unknown[] = []
    expect(result).toStrictEqual(expected)
  })
})

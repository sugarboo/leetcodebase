import { describe, expect, it } from 'vitest'
import { countLargestGroup } from '../../code/easy/01399-Count-Largest-Group'

describe('count largest group test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 13
    const result = countLargestGroup(n)
    const expected = 4
    expect(result).toEqual(expected)
  })
})

describe('count largest group test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 2
    const result = countLargestGroup(n)
    const expected = 2
    expect(result).toEqual(expected)
  })
})

describe('count largest group test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 10000
    const result = countLargestGroup(n)
    const expected = 1
    expect(result).toEqual(expected)
  })
})

describe('count largest group test case 🏅', () => {
  it('should return the expected result', () => {
    const n = 9999
    const result = countLargestGroup(n)
    const expected = 1
    expect(result).toEqual(expected)
  })
})

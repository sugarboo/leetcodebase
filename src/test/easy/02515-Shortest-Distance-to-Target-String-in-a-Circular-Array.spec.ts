import { describe, expect, it } from 'vitest'
import { closestTarget } from '../../code/easy/02515-Shortest-Distance-to-Target-String-in-a-Circular-Array'

describe('shortest distance to target string in a circular array test case 🥇', () => {
  it('should return the expected result', () => {
    const words = ['hello', 'i', 'am', 'leetcode', 'hello']
    const target = 'hello'
    const startIndex = 1
    const result = closestTarget(words, target, startIndex)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('shortest distance to target string in a circular array test case 🥈', () => {
  it('should return the expected result', () => {
    const words = ['a', 'b', 'leetcode']
    const target = 'leetcode'
    const startIndex = 0
    const result = closestTarget(words, target, startIndex)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('shortest distance to target string in a circular array test case 🥉', () => {
  it('should return the expected result', () => {
    const words = ['i', 'eat', 'leetcode']
    const target = 'ate'
    const startIndex = 0
    const result = closestTarget(words, target, startIndex)
    const expected = -1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { findJudge } from '../../code/easy/00997-Find-The-Town-Judge'

describe('find the town judge test case 🥇', () => {
  it('should return the expected result', () => {
    const n = 2
    const trust = [[1, 2]]
    const result = findJudge(n, trust)
    const expected = 2
    expect(result).toStrictEqual(expected)
  })
})

describe('find the town judge test case 🥈', () => {
  it('should return the expected result', () => {
    const n = 3
    const trust = [[1, 3], [2, 3]]
    const result = findJudge(n, trust)
    const expected = 3
    expect(result).toStrictEqual(expected)
  })
})

describe('find the town judge test case 🥉', () => {
  it('should return the expected result', () => {
    const n = 3
    const trust = [[1, 3], [2, 3], [3, 1]]
    const result = findJudge(n, trust)
    const expected = -1
    expect(result).toStrictEqual(expected)
  })
})

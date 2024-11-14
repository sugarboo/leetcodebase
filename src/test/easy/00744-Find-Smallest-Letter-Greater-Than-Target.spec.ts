import { describe, expect, it } from 'vitest'
import { nextGreatestLetter } from '../../code/easy/00744-Find-Smallest-Letter-Greater-Than-Target'

describe('find smallest letter greater than target test case 🥇', () => {
  it('should return the expected result', () => {
    const letters = ['c', 'f', 'j']
    const target = 'a'
    const result = nextGreatestLetter(letters, target)
    const expected = 'c'
    expect(result).toBe(expected)
  })
})

describe('find smallest letter greater than target test case 🥈', () => {
  it('should return the expected result', () => {
    const letters = ['c', 'f', 'j']
    const target = 'c'
    const result = nextGreatestLetter(letters, target)
    const expected = 'f'
    expect(result).toBe(expected)
  })
})

describe('find smallest letter greater than target test case 🥉', () => {
  it('should return the expected result', () => {
    const letters = ['x', 'x', 'y', 'y']
    const target = 'z'
    const result = nextGreatestLetter(letters, target)
    const expected = 'x'
    expect(result).toBe(expected)
  })
})

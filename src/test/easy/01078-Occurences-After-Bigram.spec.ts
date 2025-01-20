import { describe, expect, it } from 'vitest'
import { findOccurrences } from '../../code/easy/01078-Occurences-After-Bigram'

describe('greatest common divisor of strings test case 🥇', () => {
  it('should return the expected result', () => {
    const text = 'alice is a good girl she is a good student'
    const first = 'a'
    const second = 'good'
    const result = findOccurrences(text, first, second)
    const expected = ['girl', 'student']
    expect(result).toEqual(expected)
  })
})

describe('occurences after bigram test case 🥈', () => {
  it('should return the expected result', () => {
    const text = 'we will we will rock you'
    const first = 'we'
    const second = 'will'
    const result = findOccurrences(text, first, second)
    const expected = ['we', 'rock']
    expect(result).toEqual(expected)
  })
})

describe('occurences after bigram test case 🥉', () => {
  it('should return the expected result', () => {
    const text = 'we we we we will rock you'
    const first = 'we'
    const second = 'we'
    const result = findOccurrences(text, first, second)
    const expected = ['we', 'we', 'will']
    expect(result).toEqual(expected)
  })
})

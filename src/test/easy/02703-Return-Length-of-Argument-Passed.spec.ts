import { describe, expect, it } from 'vitest'
import { argumentsLength } from '../../code/easy/02703-Return-Length-of-Arguments-Passed'

describe('return length of arguments passed test case 🥇', () => {
  it('should return the expected count', () => {
    const args = [5]
    const expected = 1
    expect(argumentsLength(...args)).toBe(expected)
  })
})

describe('return length of arguments passed test case 🥈', () => {
  it('should return the expected count', () => {
    const args = [{}, null, '3']
    const expected = 3
    expect(argumentsLength(...args)).toBe(expected)
  })
})

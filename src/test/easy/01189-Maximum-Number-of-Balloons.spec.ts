import { describe, expect, it } from 'vitest'
import { maxNumberOfBalloons } from '../../code/easy/01189-Maximum-Number-of-Balloons'

describe('maximum number of balloons test case 🥇', () => {
  it('should return the expected result', () => {
    const text = 'nlaebolko'
    const result = maxNumberOfBalloons(text)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('maximum number of balloons test case 🥈', () => {
  it('should return the expected result', () => {
    const text = 'loonbalxballpoon'
    const result = maxNumberOfBalloons(text)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('maximum number of balloons test case 🥉', () => {
  it('should return the expected result', () => {
    const text = 'leetcode'
    const result = maxNumberOfBalloons(text)
    const expected = 0
    expect(result).toBe(expected)
  })
})

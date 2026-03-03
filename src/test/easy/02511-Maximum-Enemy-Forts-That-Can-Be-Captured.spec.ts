import { describe, expect, it } from 'vitest'
import { captureForts } from '../../code/easy/02511-Maximum-Enemy-Forts-That-Can-Be-Captured'

describe('maximum enemy forts that can be captured test case 🥇', () => {
  it('should return the expected result', () => {
    const forts = [1, 0, 0, -1, 0, 0, 0, 0, 1]
    const result = captureForts(forts)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('maximum enemy forts that can be captured test case 🥈', () => {
  it('should return the expected result', () => {
    const forts = [0, 0, 1, -1]
    const result = captureForts(forts)
    const expected = 0
    expect(result).toBe(expected)
  })
})

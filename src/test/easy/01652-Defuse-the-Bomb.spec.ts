import { describe, expect, it } from 'vitest'
import { decrypt } from '../../code/easy/01652-Defuse-the-Bomb'

describe('defuse the bomb test case 🥇', () => {
  it('should return the expected result', () => {
    const code = [5, 7, 1, 4]
    const k = 3
    const result = decrypt(code, k)
    const expected = [12, 10, 16, 13]
    expect(result).toStrictEqual(expected)
  })
})

describe('defuse the bomb test case 🥈', () => {
  it('should return the expected result', () => {
    const code = [1, 2, 3, 4]
    const k = 0
    const result = decrypt(code, k)
    const expected = [0, 0, 0, 0]
    expect(result).toStrictEqual(expected)
  })
})

describe('defuse the bomb test case 🥉', () => {
  it('should return the expected result', () => {
    const code = [2, 4, 9, 3]
    const k = -2
    const result = decrypt(code, k)
    const expected = [12, 5, 6, 13]
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { pickGifts } from '../../code/easy/02558-Take-Gifts-From-the-Richest-Pile'

describe('take gifts from the richest pile test case 🥇', () => {
  it('should return the expected result', () => {
    const gifts = [25, 64, 9, 4, 100]
    const k = 4
    const result = pickGifts(gifts, k)
    const expected = 29
    expect(result).toBe(expected)
  })
})

describe('take gifts from the richest pile test case 🥈', () => {
  it('should return the expected result', () => {
    const gifts = [1, 1, 1, 1]
    const k = 4
    const result = pickGifts(gifts, k)
    const expected = 4
    expect(result).toBe(expected)
  })
})

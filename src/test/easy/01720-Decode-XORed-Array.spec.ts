import { describe, expect, it } from 'vitest'
import { decode } from '../../code/easy/01720-Decode-XORed-Array'

describe('decode xored array test case 🥇', () => {
  it('should return the expected result', () => {
    const encoded = [1, 2, 3]
    const first = 1
    const result = decode(encoded, first)
    const expected = [1, 0, 2, 1]
    expect(result).toEqual(expected)
  })
})

describe('decode xored array test case 🥈', () => {
  it('should return the expected result', () => {
    const encoded = [6, 2, 7, 3]
    const first = 4
    const result = decode(encoded, first)
    const expected = [4, 2, 0, 7, 4]
    expect(result).toEqual(expected)
  })
})

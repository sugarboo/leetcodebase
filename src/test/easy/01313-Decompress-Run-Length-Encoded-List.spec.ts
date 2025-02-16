import { describe, expect, it } from 'vitest'
import { decompressRLElist } from './../../code/easy/01313-Decompress-Run-Length-Encoded-List'

describe('decompress run length encoded list test case 🥇', () => {
  it('should return the expected result', () => {
    const nums = [1, 2, 3, 4]
    const result = decompressRLElist(nums)
    const expected = [2, 4, 4, 4]
    expect(result).toStrictEqual(expected)
  })
})

describe('decompress run length encoded list test case 🥈', () => {
  it('should return the expected result', () => {
    const nums = [1, 1, 2, 3]
    const result = decompressRLElist(nums)
    const expected = [1, 3, 3]
    expect(result).toStrictEqual(expected)
  })
})

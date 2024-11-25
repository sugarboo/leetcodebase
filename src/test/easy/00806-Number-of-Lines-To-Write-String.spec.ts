import { describe, expect, it } from 'vitest'
import { numberOfLines } from '../../code/easy/00806-Number-of-Lines-To-Write-String'

describe('number of lines to write string test case 🥇', () => {
  it('should return the expected result', () => {
    const widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    const s = 'abcdefghijklmnopqrstuvwxyz'
    const result = numberOfLines(widths, s)
    const expected = [3, 60]
    expect(result).toStrictEqual(expected)
  })
})

describe('number of lines to write string test case 🥈', () => {
  it('should return the expected result', () => {
    const widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    const s = 'bbbcccdddaaa'
    const result = numberOfLines(widths, s)
    const expected = [2, 4]
    expect(result).toStrictEqual(expected)
  })
})

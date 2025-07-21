import { describe, expect, it } from 'vitest'
import { checkZeroOnes } from '../../code/easy/01869-Longest-Contiguous-Segments-of-Ones-Than-Zeros'

describe('longest contiguous segments of ones than zeros test case 🥇', () => {
  it('should return the expected result', () => {
    const s = '1101'
    const result = checkZeroOnes(s)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('longest contiguous segments of ones than zeros test case 🥈', () => {
  it('should return the expected result', () => {
    const s = '111000'
    const result = checkZeroOnes(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('longest contiguous segments of ones than zeros test case 🥉', () => {
  it('should return the expected result', () => {
    const s = '110100010'
    const result = checkZeroOnes(s)
    const expected = false
    expect(result).toBe(expected)
  })
})

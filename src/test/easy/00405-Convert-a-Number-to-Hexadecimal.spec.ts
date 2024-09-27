import { describe, expect, it } from 'vitest'
import { toHex } from '../../code/easy/00405-Convert-a-Number-to-Hexadecimal'

describe('convert a number to hexadecimal test case 🥇', () => {
  it('should return the expected result', () => {
    expect(toHex(26)).toBe('1a')
  })
})

describe('convert a number to hexadecimal test case 🥈', () => {
  it('should return the expected result', () => {
    expect(toHex(-1)).toBe('ffffffff')
  })
})

describe('convert a number to hexadecimal test case 🥉', () => {
  it('should return the expected result', () => {
    expect(toHex(222222)).toBe('3640e')
  })
})

describe('convert a number to hexadecimal test case 🏅', () => {
  it('should return the expected result', () => {
    expect(toHex(-222222)).toBe('fffc9bf2')
  })
})

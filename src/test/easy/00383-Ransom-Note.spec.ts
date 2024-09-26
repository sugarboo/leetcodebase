import { describe, expect, it } from 'vitest'
import { canConstruct } from '../../code/easy/00383-Ransom-Note'

describe('ransom note test case 🥇', () => {
  it('should return the expected result', () => {
    const ransomNote = 'a'
    const magazine = 'b'
    expect(canConstruct(ransomNote, magazine)).toBe(false)
  })
})

describe('ransom note test case 🥈', () => {
  it('should return the expected result', () => {
    const ransomNote = 'aa'
    const magazine = 'ab'
    expect(canConstruct(ransomNote, magazine)).toBe(false)
  })
})

describe('ransom note test case 🥉', () => {
  it('should return the expected result', () => {
    const ransomNote = 'aa'
    const magazine = 'aab'
    expect(canConstruct(ransomNote, magazine)).toBe(true)
  })
})

describe('ransom note test case 🏅', () => {
  it('should return the expected result', () => {
    const ransomNote = 'aab'
    const magazine = 'baa'
    expect(canConstruct(ransomNote, magazine)).toBe(true)
  })
})

describe('ransom note test case 🏅🏅', () => {
  it('should return the expected result', () => {
    const ransomNote = 'bg'
    const magazine = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'
    expect(canConstruct(ransomNote, magazine)).toBe(true)
  })
})

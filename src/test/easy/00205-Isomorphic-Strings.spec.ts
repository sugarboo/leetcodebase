import { describe, expect, it } from 'vitest'
import { isIsomorphic } from '../../code/easy/00205-Isomorphic-Strings'

describe('isomorphic strings test case 🥇', () => {
  it('should return the expected result', () => {
    const s = 'egg'
    const t = 'add'
    const result = isIsomorphic(s, t)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('isomorphic strings test case 🥈', () => {
  it('should return the expected result', () => {
    const s = 'foo'
    const t = 'bar'
    const result = isIsomorphic(s, t)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('isomorphic strings test case 🥉', () => {
  it('should return the expected result', () => {
    const s = 'paper'
    const t = 'title'
    const result = isIsomorphic(s, t)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('isomorphic strings test case 🏅', () => {
  it('should return the expected result', () => {
    const s = '13'
    const t = '42'
    const result = isIsomorphic(s, t)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('isomorphic strings test case 🏅🏅', () => {
  it('should return the expected result', () => {
    const s = 'abcdefgh'
    const t = 'abcdefg'
    const result = isIsomorphic(s, t)
    const expected = false
    expect(result).toBe(expected)
  })
})

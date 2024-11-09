import { describe, expect, it } from 'vitest'
import { judgeCircle } from '../../code/easy/00657-Robot-Return-to-Origin'

describe('robot return to origin test case 🥇', () => {
  it('should return the expected result', () => {
    const moves = 'UD'
    const result = judgeCircle(moves)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('robot return to origin test case 🥈', () => {
  it('should return the expected result', () => {
    const moves = 'LLRRUDUDUULLDDRLRR'
    const result = judgeCircle(moves)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('robot return to origin test case 🥉', () => {
  it('should return the expected result', () => {
    const moves = 'LL'
    const result = judgeCircle(moves)
    const expected = false
    expect(result).toBe(expected)
  })
})

describe('robot return to origin test case 🏅', () => {
  it('should return the expected result', () => {
    const moves = 'URURUUULLRRDLLDULLUDRRULLRDLRRDRLDLRDLDRDUDULLUUUULRRLDLLLUDLDUULLRUUUR'
    const result = judgeCircle(moves)
    const expected = false
    expect(result).toBe(expected)
  })
})

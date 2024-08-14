import { describe, expect, it } from 'vitest'
import type { OnceFn } from '../../code/easy/02666-Allow-One-Function-Call'
import { once } from '../../code/easy/02666-Allow-One-Function-Call'

describe('allow one function call test case 🥇', () => {
  it('should return the expected array', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const onceFn = once(fn as OnceFn)
    const results = [
      onceFn(1, 2, 3),
      onceFn(2, 3, 6),
    ]
    const expected = [
      6,
      undefined,
    ]
    expect(results).toStrictEqual(expected)
  })
})

describe('allow one function call test case 🥈', () => {
  it('should return the expected array', () => {
    const fn = (a: number, b: number, c: number) => a * b * c
    const onceFn = once(fn as OnceFn)
    const results = [
      onceFn(5, 7, 4),
      onceFn(2, 3, 6),
      onceFn(4, 6, 8),
    ]
    const expected = [
      140,
      undefined,
      undefined,
    ]
    expect(results).toStrictEqual(expected)
  })
})

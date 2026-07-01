import { describe, expect, it } from 'vitest'
import { removeTrailingZeros } from '../../code/easy/02710-remove-trailing-zeros-from-a-string'

describe('remove trailing zeros from a string test case 🥇', () => {
  it('should return the expected result', () => {
    const num = '51230100'
    const expected = '512301'
    const result = removeTrailingZeros(num)
    expect(result).toBe(expected)
  })
})

describe('remove trailing zeros from a string test case 🥈', () => {
  it('should return the expected result', () => {
    const num = '123'
    const expected = '123'
    const result = removeTrailingZeros(num)
    expect(result).toBe(expected)
  })
})

describe('remove trailing zeros from a string test case 🥉', () => {
  it('should return the expected result', () => {
    const num = '31514216007864075756059111751787923413952537015859352242147727420'
    const expected = '3151421600786407575605911175178792341395253701585935224214772742'
    const result = removeTrailingZeros(num)
    expect(result).toBe(expected)
  })
})

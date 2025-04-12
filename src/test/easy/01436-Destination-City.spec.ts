import { describe, expect, it } from 'vitest'
import { destCity } from '../../code/easy/01436-Destination-City'

describe('destination city test case 🥇', () => {
  it('should return the expected result', () => {
    const paths = [['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]
    const result = destCity(paths)
    const expected = 'Sao Paulo'
    expect(result).toBe(expected)
  })
})

describe('destination city test case 🥈', () => {
  it('should return the expected result', () => {
    const paths = [['B', 'C'], ['D', 'B'], ['C', 'A']]
    const result = destCity(paths)
    const expected = 'A'
    expect(result).toBe(expected)
  })
})

describe('destination city test case 🥉', () => {
  it('should return the expected result', () => {
    const paths = [['A', 'Z']]
    const result = destCity(paths)
    const expected = 'Z'
    expect(result).toBe(expected)
  })
})

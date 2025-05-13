import { describe, expect, it } from 'vitest'
import { convertTemperature } from '../../code/easy/02469-Convert-the-Temperature'

describe('convert the temperature test case 🥇', () => {
  it('should return the expected result', () => {
    const celsius = 36.50
    const result = convertTemperature(celsius)
    const expected = [309.65000, 97.70000]
    expect(result).toStrictEqual(expected)
  })
})

describe('convert the temperature test case 🥈', () => {
  it('should return the expected result', () => {
    const celsius = 122.11
    const result = convertTemperature(celsius)
    const expected = [395.26000, 251.79800]
    expect(result).toStrictEqual(expected)
  })
})

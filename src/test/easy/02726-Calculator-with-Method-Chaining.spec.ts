import { describe, expect, it } from 'vitest'
import { Calculator } from '../../code/easy/02726-Calculator-with-Method-Chaining'

describe('calculator with method chaining test case 🥇', () => {
  it('should return the expected result', () => {
    const calc = new Calculator(10)
    calc.add(5)
    calc.subtract(7)
    const result = calc.getResult()
    const expected = 8
    expect(result).toBe(expected)
  })
})

describe('calculator with method chaining test case 🥈', () => {
  it('should return the expected result', () => {
    const calc = new Calculator(2)
    calc.multiply(5)
    calc.power(2)
    const result = calc.getResult()
    const expected = 100
    expect(result).toBe(expected)
  })
})

describe('calculator with method chaining test case 🥉', () => {
  it('should return the expected result', () => {
    try {
      const calc = new Calculator(20)
      calc.divide(0)
      calc.getResult()
    } catch (error) {
      expect(error.message).toBe('Division by zero is not allowed')
    }
  })
})

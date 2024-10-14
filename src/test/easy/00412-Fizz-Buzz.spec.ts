import { describe, expect, it } from 'vitest'
import { fizzBuzz } from '../../code/easy/00412-Fizz-Buzz'

describe('fizz buzz test case 🥇', () => {
  it('should return the expected result', () => {
    const result = fizzBuzz(3)
    const expected = ['1', '2', 'Fizz']
    expect(result).toStrictEqual(expected)
  })
})

describe('fizz buzz test case 🥈', () => {
  it('should return the expected result', () => {
    const result = fizzBuzz(5)
    const expected = ['1', '2', 'Fizz', '4', 'Buzz']
    expect(result).toStrictEqual(expected)
  })
})

describe('fizz buzz test case 🥉', () => {
  it('should return the expected result', () => {
    const result = fizzBuzz(15)
    const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { checkIfInstanceOf } from '../../code/medium/02618-Check-if-Object-Instance-of-Class'

describe('check if object instance of class test case 🥇', () => {
  it('should return the expected result', () => {
    const result = checkIfInstanceOf(new Date(), Date)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if object instance of class test case 🥈', () => {
  it('should return the expected result', () => {
    const func = () => {
      class Animal {

      }
      class Dog extends Animal {

      }

      return checkIfInstanceOf(new Dog(), Animal)
    }
    const result = func()
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if object instance of class test case 🥉', () => {
  it('should return the expected result', () => {
    const func = () => {}
    const result = checkIfInstanceOf(func, Function)
    const expected = true
    expect(result).toBe(expected)
  })
})

describe('check if object instance of class test case 🏅', () => {
  it('should return the expected result', () => {
    const result = checkIfInstanceOf(5, Number)
    const expected = true
    expect(result).toBe(expected)
  })
})

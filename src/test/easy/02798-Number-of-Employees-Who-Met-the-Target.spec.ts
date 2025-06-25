import { describe, expect, it } from 'vitest'
import { numberOfEmployeesWhoMetTarget } from '../../code/easy/02798-Number-of-Employees-Who-Met-the-Target'

describe('number of employees who met the target test case 🥇', () => {
  it('should return the expected result', () => {
    const hours = [0, 1, 2, 3, 4]
    const target = 2
    const result = numberOfEmployeesWhoMetTarget(hours, target)
    const expected = 3
    expect(result).toBe(expected)
  })
})

describe('number of employees who met the target test case 🥈', () => {
  it('should return the expected result', () => {
    const hours = [5, 1, 4, 2, 2]
    const target = 2
    const result = numberOfEmployeesWhoMetTarget(hours, target)
    const expected = 4
    expect(result).toBe(expected)
  })
})

describe('number of employees who met the target test case 🥉', () => {
  it('should return the expected result', () => {
    const hours = [1, 2, 3]
    const target = 2
    const result = numberOfEmployeesWhoMetTarget(hours, target)
    const expected = 2
    expect(result).toBe(expected)
  })
})

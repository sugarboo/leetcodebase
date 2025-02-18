import { describe, expect, it } from 'vitest'
import { average } from '../../code/easy/01491-Average-Salary-Excluding-the-Minimum-and-Maximum-Salary'

describe('average salary excluding the minimum and maximum salary test case 🥇', () => {
  it('should return the expected result', () => {
    const salary = [4000, 3000, 1000, 2000]
    const result = average(salary)
    const expected = 2500
    expect(result).toBe(expected)
  })
})

describe('average salary excluding the minimum and maximum salary test case 🥈', () => {
  it('should return the expected result', () => {
    const salary = [1000, 2000, 3000]
    const result = average(salary)
    const expected = 2000
    expect(result).toBe(expected)
  })
})

describe('average salary excluding the minimum and maximum salary test case 🥉', () => {
  it('should return the expected result', () => {
    const salary = [6000, 5000, 4000, 3000, 2000, 1000]
    const result = average(salary)
    const expected = 3500
    expect(result).toBe(expected)
  })
})

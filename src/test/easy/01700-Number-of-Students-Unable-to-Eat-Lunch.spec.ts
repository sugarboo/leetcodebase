import { describe, expect, it } from 'vitest'
import { countStudents } from '../../code/easy/01700-Number-of-Students-Unable-to-Eat-Lunch'

describe('reformat phone number test case 🥇', () => {
  it('should return the expected result', () => {
    const students = [1, 1, 0, 0]
    const sandwiches = [0, 1, 0, 1]
    const result = countStudents(students, sandwiches)
    const expected = 0
    expect(result).toBe(expected)
  })
})

describe('reformat phone number test case 🥈', () => {
  it('should return the expected result', () => {
    const students = [1, 1, 1, 0, 0, 1]
    const sandwiches = [1, 0, 0, 0, 1, 1]
    const result = countStudents(students, sandwiches)
    const expected = 3
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { minimumBoxes } from '../../code/easy/03074-Apple-Redistribution-into-Boxes'

describe('apple redistribution into boxes test case 🥇', () => {
  it('should return the expected result', () => {
    const apple = [1, 3, 2]
    const capacity = [4, 3, 1, 5, 2]
    const result = minimumBoxes(apple, capacity)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('apple redistribution into boxes test case 🥈', () => {
  it('should return the expected result', () => {
    const apple = [5, 5, 5]
    const capacity = [2, 4, 2, 7]
    const result = minimumBoxes(apple, capacity)
    const expected = 4
    expect(result).toBe(expected)
  })
})

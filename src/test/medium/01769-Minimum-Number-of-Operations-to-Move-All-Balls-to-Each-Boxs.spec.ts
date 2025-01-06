import { describe, expect, it } from 'vitest'
import { minOperations } from '../../code/medium/01769-Minimum-Number-of-Operations-to-Move-All-Balls-to-Each-Box'

describe('minimum number of operations to move all balls to each box test case 🥇', () => {
  it('should return the expected result', () => {
    const boxes = '110'
    const result = minOperations(boxes)
    const expected = [1, 1, 3]
    expect(result).toStrictEqual(expected)
  })
})

describe('minimum number of operations to move all balls to each box test case 🥈', () => {
  it('should return the expected result', () => {
    const boxes = '001011'
    const result = minOperations(boxes)
    const expected = [11, 8, 5, 4, 3, 4]
    expect(result).toStrictEqual(expected)
  })
})

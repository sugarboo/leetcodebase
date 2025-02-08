import { describe, expect, it } from 'vitest'
import { NumberContainers } from '../../code/medium/02349-Design-a-Number-Container-System'

describe('design a Number Container System test case 🥇', () => {
  it('should return the expected result', () => {
    const numberContainers = new NumberContainers()
    numberContainers.change(1, 10)
    numberContainers.change(2, 10)
    numberContainers.change(3, 20)
    numberContainers.change(4, 30)
    numberContainers.change(5, 40)
    const result = numberContainers.find(10)
    const expected = 1
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { inorderTraversal } from '../../code/medium/02649-Nested-Array-Generator'

describe('nested array generator test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [[6], [1, 3], []]
    const generator = inorderTraversal(arr)
    const result = [
      generator.next().value,
      generator.next().value,
      generator.next().value,
    ]
    const expected = [6, 1, 3]
    expect(result).toStrictEqual(expected)
    expect(generator.next().done).toBe(true)
  })
})

describe('nested array generator test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = []
    const generator = inorderTraversal(arr)
    const result = []
    const expected = []
    expect(result).toStrictEqual(expected)
    expect(generator.next().done).toBe(true)
  })
})

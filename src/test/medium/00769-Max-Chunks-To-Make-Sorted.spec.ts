import { describe, expect, it } from 'vitest'
import { maxChunksToSorted } from '../../code/medium/00769-Max-Chunks-To-Make-Sorted'

describe('max chunks to make sorted test case 🥇', () => {
  it('should return the expected result', () => {
    const arr = [4, 3, 2, 1, 0]
    const result = maxChunksToSorted(arr)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('max chunks to make sorted test case 🥈', () => {
  it('should return the expected result', () => {
    const arr = [1, 0, 2, 3, 4]
    const result = maxChunksToSorted(arr)
    const expected = 4
    expect(result).toBe(expected)
  })
})

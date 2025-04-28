import { describe, expect, it } from 'vitest'
import { countSubarrays } from '../../code/hard/02302-Count-Subarrays-With-Score-Less-Than-K'

describe('count subarrays with score less than k test case 🥇', () => {
  it('should return the expected result', () => {
    const words = [2, 1, 4, 3, 5]
    const result = countSubarrays(words, 10)
    const expected = 6
    expect(result).toBe(expected)
  })
})

describe('count subarrays with score less than k test case 🥈', () => {
  it('should return the expected result', () => {
    const words = [1, 1, 1]
    const result = countSubarrays(words, 5)
    const expected = 5
    expect(result).toBe(expected)
  })
})

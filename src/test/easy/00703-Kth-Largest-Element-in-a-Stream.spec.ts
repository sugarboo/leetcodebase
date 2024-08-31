import { describe, expect, it } from 'vitest'
import { KthLargest } from '../../code/easy/00703-Kth-Largest-Element-in-a-Stream'

describe('merge sorted array test case 🥇', () => {
  it('should return the expected element ', () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2])

    const result1 = kthLargest.add(3)
    const result2 = kthLargest.add(5)
    const result3 = kthLargest.add(10)
    const result4 = kthLargest.add(9)
    const result5 = kthLargest.add(4)
    const results = [result1, result2, result3, result4, result5]
    const expected = [4, 5, 5, 8, 8]

    expect(results).toStrictEqual(expected)
  })
})

describe('merge sorted array test case 🥈', () => {
  it('should return the expected element ', () => {
    const kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3])

    const result1 = kthLargest.add(2)
    const result2 = kthLargest.add(10)
    const result3 = kthLargest.add(9)
    const result4 = kthLargest.add(9)
    const results = [result1, result2, result3, result4]
    const expected = [7, 7, 7, 8]

    expect(results).toStrictEqual(expected)
  })
})

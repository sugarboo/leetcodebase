import { describe, expect, it } from 'vitest'
import { ListNode } from '../../utils/ListNode'
import { getDecimalValue } from './../../code/easy/01290-Convert-Binary-Number-in-a-Linked-List-to-Integer'

describe('find special integer test case 🥇', () => {
  it('should return the expected result', () => {
    const head = new ListNode(1, new ListNode(0, new ListNode(1)))
    const result = getDecimalValue(head)
    const expected = 5
    expect(result).toBe(expected)
  })
})

describe('find special integer test case 🥈', () => {
  it('should return the expected result', () => {
    const head = new ListNode(0)
    const result = getDecimalValue(head)
    const expected = 0
    expect(result).toBe(expected)
  })
})

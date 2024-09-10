import { describe, expect, it } from 'vitest'
import { ListNode, insertGreatestCommonDivisors } from '../../code/medium/02807-Insert-the-Greatest-Common-Divisors-in-Linked-List'

describe('insert the greatest common divisors in linked list test case 🥇', () => {
  it('should return the expected result', async () => {
    const head = new ListNode(
      18,
      new ListNode(
        6,
        new ListNode(
          10,
          new ListNode(
            3,
            null,
          ),
        ),
      ),
    )
    const result = insertGreatestCommonDivisors(head)
    const expected = new ListNode(
      18,
      new ListNode(
        6,
        new ListNode(
          6,
          new ListNode(
            2,
            new ListNode(
              10,
              new ListNode(
                1,
                new ListNode(
                  3,
                  null,
                ),
              ),
            ),
          ),
        ),
      ),
    )
    expect(result).toStrictEqual(expected)
  })
})

describe('insert the greatest common divisors in linked list test case 🥈', () => {
  it('should return the expected result', async () => {
    const head = new ListNode(7, null)
    const result = insertGreatestCommonDivisors(head)
    expect(result).toStrictEqual(head)
  })
})

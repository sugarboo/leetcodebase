import { describe, expect, it } from 'vitest'
import { numUniqueEmails } from '../../code/easy/00929-Unique-Email-Addresses'

describe('unique email addresses test case 🥇', () => {
  it('should return the expected result', () => {
    const emails = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']
    const result = numUniqueEmails(emails)
    const expected = 2
    expect(result).toBe(expected)
  })
})

describe('unique email addresses test case 🥈', () => {
  it('should return the expected result', () => {
    const emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']
    const result = numUniqueEmails(emails)
    const expected = 3
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { reverseWords } from '../../code/easy/00557-Reverse-Words-in-a-String-III'

describe('reverse words in a string III test case 🥇', () => {
  it('should return the expected result', () => {
    const s = `Let's take LeetCode contest`
    const result = reverseWords(s)
    const expected = `s'teL ekat edoCteeL tsetnoc`
    expect(result).toBe(expected)
  })
})

describe('reverse words in a string III test case 🥈', () => {
  it('should return the expected result', () => {
    const s = `Mr Ding`
    const result = reverseWords(s)
    const expected = `rM gniD`
    expect(result).toBe(expected)
  })
})

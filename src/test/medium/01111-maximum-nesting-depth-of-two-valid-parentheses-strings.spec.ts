import { describe, expect, it } from 'vitest'
import { maxDepthAfterSplit } from '../../code/medium/01111-maximum-nesting-depth-of-two-valid-parentheses-strings'

describe('maximum nesting depth of two valid parentheses strings test case 🥇', () => {
  it('should return the expected result', () => {
    const seq = "(()())"
    const result = maxDepthAfterSplit(seq)
    const expected = [1, 0, 0, 0, 0, 1]
    expect(result).toStrictEqual(expected)
  })
})

describe('maximum nesting depth of two valid parentheses strings test case 🥈', () => {
  it('should return the expected result', () => {
    const seq = "()(())()"
    const result = maxDepthAfterSplit(seq)
    const expected = [1, 1, 1, 0, 0, 1, 1, 1]
    expect(result).toStrictEqual(expected)
  })
})


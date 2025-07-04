import { describe, expect, it } from 'vitest'
import { countMatches } from '../../code/easy/01773-Count-Items-Matching-a-Rule'

describe('count items matching a rule test case 🥇', () => {
  it('should return the expected result', () => {
    const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']]
    const ruleKey = 'color'
    const ruleValue = 'silver'
    const result = countMatches(items, ruleKey, ruleValue)
    const expected = 1
    expect(result).toBe(expected)
  })
})

describe('count items matching a rule test case 🥈', () => {
  it('should return the expected result', () => {
    const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']]
    const ruleKey = 'type'
    const ruleValue = 'phone'
    const result = countMatches(items, ruleKey, ruleValue)
    const expected = 2
    expect(result).toBe(expected)
  })
})

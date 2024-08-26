import { describe, expect, it } from 'vitest'
import { callPolyfill } from '../../code/medium/02693-Call-Function-with-Custom-Context'

describe('call function with custom context test case 🥇', () => {
  it('should return the expected result', () => {
    function add(b: number): number {
      return this.a + b
    }
    add.callPolyfill = callPolyfill
    const result = add.callPolyfill({ a: 5 }, 7)
    const expected = 12
    expect(result).toBe(expected)
  })
})

describe('call function with custom context test case 🥈', () => {
  it('should return the expected result', () => {
    function tax(price: number, taxRate: number): string {
      return `The cost of the ${this.item} is ${price * taxRate}`
    }
    tax.callPolyfill = callPolyfill
    const result = tax.callPolyfill({ item: 'burger' }, 10, 1.1)
    const expected = 'The cost of the burger is 11'
    expect(result).toBe(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { ProductOfNumbers } from '../../code/medium/01352-Product-of-the-Last-K-Numbers'

describe('product of the last k numbers test case 🥇', () => {
  it('should return the expected steps', () => {
    const productOfNumbers = new ProductOfNumbers()
    productOfNumbers.add(3)
    productOfNumbers.add(0)
    productOfNumbers.add(2)
    productOfNumbers.add(5)
    productOfNumbers.add(4)
    expect(productOfNumbers.getProduct(2)).toBe(20)
    expect(productOfNumbers.getProduct(3)).toBe(40)
    expect(productOfNumbers.getProduct(4)).toBe(0)
    productOfNumbers.add(8)
    expect(productOfNumbers.getProduct(2)).toBe(32)
  })
})

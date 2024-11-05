import { describe, expect, it } from 'vitest'
import { findRestaurant } from '../../code/easy/00599-Minimum-Index-Sum-of-Two-Lists'

describe('minimum index sum of two lists test case 🥇', () => {
  it('should return the expected result', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
    const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
    const result = findRestaurant(list1, list2)
    const expected = ['Shogun']
    expect(result).toStrictEqual(expected)
  })
})

describe('minimum index sum of two lists test case 🥈', () => {
  it('should return the expected result', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
    const list2 = ['KFC', 'Shogun', 'Burger King']
    const result = findRestaurant(list1, list2)
    const expected = ['Shogun']
    expect(result).toStrictEqual(expected)
  })
})

describe('minimum index sum of two lists test case 🥉', () => {
  it('should return the expected result', () => {
    const list1 = ['happy', 'sad', 'good']
    const list2 = ['sad', 'happy', 'good']
    const result = findRestaurant(list1, list2)
    const expected = ['happy', 'sad']
    expect(result).toStrictEqual(expected)
  })
})

import { describe, expect, it } from 'vitest'
import { MyCircularDeque } from '../../code/medium/00641-Design-Circular-Deque'

describe('design circular deque test case 🥇', () => {
  it('should return the expected result', () => {
    const myCircularDeque = new MyCircularDeque(3)
    expect(myCircularDeque.insertLast(1)).toBe(true)
    expect(myCircularDeque.insertFront(3)).toBe(true)
    expect(myCircularDeque.insertLast(2)).toBe(true)
    expect(myCircularDeque.insertFront(4)).toBe(false)
    expect(myCircularDeque.getRear()).toBe(2)
    expect(myCircularDeque.isFull()).toBe(true)
    expect(myCircularDeque.deleteLast()).toBe(true)
    expect(myCircularDeque.insertFront(4)).toBe(true)
    expect(myCircularDeque.getFront()).toBe(4)
  })
})

describe('design circular deque test case 🥈', () => {
  it('should return the expected result', () => {
    const myCircularDeque = new MyCircularDeque(4)
    expect(myCircularDeque.insertFront(9)).toBe(true)
    expect(myCircularDeque.deleteLast()).toBe(true)
    expect(myCircularDeque.getRear()).toBe(-1)
    expect(myCircularDeque.getFront()).toBe(-1)
    expect(myCircularDeque.getFront()).toBe(-1)
    expect(myCircularDeque.deleteFront()).toBe(false)
    expect(myCircularDeque.insertFront(6)).toBe(true)
    expect(myCircularDeque.insertLast(5)).toBe(true)
    expect(myCircularDeque.insertFront(9)).toBe(true)
    expect(myCircularDeque.getFront()).toBe(9)
    expect(myCircularDeque.insertFront(6)).toBe(true)
  })
})

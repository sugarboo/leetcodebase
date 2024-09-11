import { describe, expect, it } from 'vitest'
import { MyStack } from '../../code/easy/00225-Implement-Stack-using-Queues'

describe('implement stack using queues test case 🥇', () => {
  it('should return the expected result', () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    expect(myStack.top()).toBe(2)
    expect(myStack.pop()).toBe(2)
    expect(myStack.empty()).toBe(false)
    expect(myStack.stack).toStrictEqual([1])
  })
})

describe('implement stack using queues test case 🥈', () => {
  it('should return the expected result', () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    expect(myStack.top()).toBe(3)
    expect(myStack.pop()).toBe(3)
    myStack.push(4)
    expect(myStack.empty()).toBe(false)
    expect(myStack.stack).toStrictEqual([1, 2, 4])
  })
})

describe('implement stack using queues test case 🥉', () => {
  it('should return the expected result', () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    expect(myStack.pop()).toBe(2)
    expect(myStack.top()).toBe(1)
    expect(myStack.pop()).toBe(1)
    expect(myStack.empty()).toBe(true)
    expect(myStack.stack).toStrictEqual([])
  })
})

describe('implement stack using queues test case 🏅', () => {
  it('should return the expected result', () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    expect(myStack.top()).toBe(3)
    myStack.push(4)
    myStack.push(5)
    expect(myStack.pop()).toBe(5)
    expect(myStack.pop()).toBe(4)
    expect(myStack.empty()).toBe(false)
    expect(myStack.stack).toStrictEqual([1, 2, 3])
  })
})

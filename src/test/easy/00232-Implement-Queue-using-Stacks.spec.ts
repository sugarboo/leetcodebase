import { describe, expect, it } from 'vitest'
import { MyQueue } from '../../code/easy/00232-Implement-Queue-using-Stacks'

describe('implement queue using stacks test case 🥇', () => {
  it('should return the expected result', () => {
    const queue = new MyQueue()
    queue.push(1)
    queue.push(2)
    expect(queue.peek()).toBe(1)
    expect(queue.pop()).toBe(1)
    expect(queue.empty()).toBe(false)
  })
})

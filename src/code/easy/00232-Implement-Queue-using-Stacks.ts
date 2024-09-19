export class MyQueue {
  private queue: number[] = []

  constructor() {

  }

  push(x: number): void {
    this.queue = [...this.queue, x]
  }

  pop(): number {
    const pop = this.queue[0]
    this.queue = this.queue.slice(1)
    return pop
  }

  peek(): number {
    return this.queue[0]
  }

  empty(): boolean {
    return !this.queue.length
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

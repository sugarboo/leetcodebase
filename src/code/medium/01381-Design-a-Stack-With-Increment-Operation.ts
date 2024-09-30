export class CustomStack {
  stack: number[]
  private maxSize: number

  constructor(maxSize: number) {
    this.stack = []
    this.maxSize = maxSize
  }

  push(x: number): void {
    if (this.stack.length !== this.maxSize) {
      this.stack = [...this.stack, x]
    }
  }

  pop(): number {
    const { length: len } = this.stack
    if (len === 0) {
      return -1
    }

    const pop = this.stack[len - 1]
    this.stack.length = len - 1
    return pop
  }

  increment(k: number, val: number): void {
    this.stack = this.stack.map((item, index) => {
      return index + 1 <= k ? item + val : item
    })
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

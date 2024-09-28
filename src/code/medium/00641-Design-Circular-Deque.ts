export class MyCircularDeque {
  private deque: number[]
  private max: number

  constructor(k: number) {
    this.max = k
    this.deque = []
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.deque = [value, ...this.deque]
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.deque = [...this.deque, value]
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.deque.splice(0, 1)
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.deque.splice(this.deque.length - 1, 1)
    return true
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.deque[0]
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.deque[this.deque.length - 1]
  }

  isEmpty(): boolean {
    return this.deque.length === 0
  }

  isFull(): boolean {
    return this.deque.length === this.max
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

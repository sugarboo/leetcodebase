export class OrderedStream {
  private stream: string[]
  private ptr: number

  constructor(n: number) {
    this.stream = Array.from<string>({ length: n }).fill('')
    this.ptr = 0
  }

  insert(id: number, value: string): string[] {
    const index = id - 1
    this.stream[index] = value
    if (index === this.ptr) {
      const ptr = this.stream.indexOf('')
      this.ptr = ptr !== -1 ? ptr : this.stream.length
      return this.stream.slice(index, this.ptr)
    }

    return []
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */

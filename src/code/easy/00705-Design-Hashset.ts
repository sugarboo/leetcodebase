export class MyHashSet {
  set: number[] = []
  constructor() {

  }

  add(key: number): void {
    if (!this.contains(key)) {
      this.set.push(key)
    }
  }

  remove(key: number): void {
    if (this.contains(key)) {
      const index = this.set.indexOf(key)
      this.set.splice(index, 1)
    }
  }

  contains(key: number): boolean {
    return this.set.includes(key)
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

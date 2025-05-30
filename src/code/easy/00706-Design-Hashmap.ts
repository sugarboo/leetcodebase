export class MyHashMap {
  map: Record<number | string, number> = {}

  constructor() {

  }

  put(key: number, value: number): void {
    this.map[key] = value
  }

  get(key: number): number {
    if (Object.hasOwn(this.map, key)) {
      return this.map[key]
    } else {
      return -1
    }
  }

  remove(key: number): void {
    if (Object.hasOwn(this.map, key)) {
      delete this.map[key]
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

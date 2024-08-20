export class TimeLimitedCache {
  private data: Map<number, {
    value: number
    expiration: number
  }> = new Map()

  constructor() {

  }

  set(key: number, value: number, duration: number): boolean {
    let result: boolean = false
    const { data } = this

    if (data.has(key) && data.get(key)!.expiration > Date.now()) {
      result = true
    } else {
      result = false
    }
    data.set(key, {
      value,
      expiration: Date.now() + duration,
    })

    return result
  }

  get(key: number): number {
    const { data } = this
    if (data.has(key) && data.get(key)!.expiration > Date.now()) {
      return data.get(key)!.value
    }
    return -1
  }

  count(): number {
    let count = 0
    const { data } = this

    const keys = data.keys()
    for (const key of keys) {
      if (data.get(key)!.expiration > Date.now()) {
        count++
      }
    }

    return count
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

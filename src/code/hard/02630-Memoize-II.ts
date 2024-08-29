type Fn<T, U> = (...params: T[]) => U
type Cache = Map<any, any>

export function memoize<T, U>(fn: Fn<T, U>): Fn<T, U> {
  // eslint-disable-next-line symbol-description
  const RET = Symbol()
  const cache: Cache = new Map()

  return function (...args: T[]): U {
    let currentCache = cache
    for (const arg of args) {
      if (!currentCache.has(arg)) {
        currentCache.set(arg, new Map())
      }
      currentCache = currentCache.get(arg)
    }
    if (currentCache.has(RET)) {
      return currentCache.get(RET)
    }
    const result = fn(...args)
    currentCache.set(RET, result)

    return result
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 * callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

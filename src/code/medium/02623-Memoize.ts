type Fn<T, U> = (...params: T[]) => U

export function memoize<T, U>(fn: Fn<T, U>): Fn<T, U> {
  const cache: {
    [key: string]: U
  } = {}
  return function (...args: T[]): U {
    const key = JSON.stringify(args)
    if (key in cache) {
      return cache[key]
    }
    const result = fn(...args)
    cache[key] = result
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

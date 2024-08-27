type Fn<T> = () => Promise<T>

export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = Array.from({ length: functions.length })
    let count = 0
    functions.forEach((fn, i) => {
      fn()
        .then((res) => {
          results[i] = res
          if (++count === functions.length) {
            resolve(results)
          }
        })
        .catch(err => reject(err))
    })
  })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

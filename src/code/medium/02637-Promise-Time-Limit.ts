export type Fn = (...params: any[]) => Promise<any>

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const fnPromise = fn(...args)
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Time Limit Exceeded'))
      }, t)
    })

    return Promise.race([
      fnPromise,
      timeoutPromise,
    ])
  }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

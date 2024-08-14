type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
export type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

export function once(fn: OnceFn): OnceFn {
  let hasBeenCalled = false
  let result

  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args)
      hasBeenCalled = true
      return result
    } else {
      return undefined
    }
  }
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
// interface Array<T> {
//   groupBy: (fn: (item: T) => string) => Record<string, T[]>
// }

export function groupBy<T>(fn: (item: T) => string): Record<string, T[]> {
  const obj: Record<string, T[]> = {}

  const that = this as T[]

  that.forEach((item) => {
    const key = fn(item)
    if (obj[key] && Array.isArray(obj[key])) {
      obj[key].push(item)
    } else {
      obj[key] = [item]
    }
  })

  return obj
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

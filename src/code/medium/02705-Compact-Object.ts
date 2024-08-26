type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

export function compactObject(obj: Obj): Obj {
  const isArray = Array.isArray(obj)
  const compacted: Obj = isArray ? [] : {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let element = obj[key] as JSONValue
      if (element) {
        if (typeof element === 'object') {
          element = compactObject(element)
        }
        if (isArray && Array.isArray(compacted)) {
          compacted.push(element)
        } else {
          compacted[key] = element
        }
      }
    }
  }

  return compacted
}

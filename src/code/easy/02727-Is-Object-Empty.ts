type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | JSONValue[]

export function isEmpty(obj: Obj): boolean {
  if (Array.isArray(obj)) {
    return !obj.length
  } else {
    return !Object.keys(obj).length
  }
}

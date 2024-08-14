type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = number | Record<string, JSONValue> | Array<JSONValue>

export function chunk(arr: Obj[], size: number): Obj[][] {
  const chuckedArray: Obj[][] = []
  let i = 0
  while (i < arr.length) {
    chuckedArray.push(arr.slice(i, i + size))
    i += size
  }

  return chuckedArray
}

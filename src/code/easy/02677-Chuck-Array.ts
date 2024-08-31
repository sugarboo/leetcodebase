type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = number | Record<string, JSONValue> | Array<JSONValue>

export function chunk(arr: Obj[], size: number): Obj[][] {
  const chuckedArray: Obj[][] = []

  /* While Loop */
  // let i = 0
  // while (i < arr.length) {
  //   chuckedArray.push(arr.slice(i, i + size))
  //   i += size
  // }

  /* For Loop */
  for (let i = 0; i < arr.length; i += size) {
    chuckedArray.push(arr.slice(i, i + size))
  }

  return chuckedArray
}

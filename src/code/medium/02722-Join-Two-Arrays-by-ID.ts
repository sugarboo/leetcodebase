type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param arr1
 * @param arr2
 * @returns A new joined array, formed by merging arr1 and arr2 based on their `id` key
 */
function join1(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const listToMap = (list: ArrayType[]): Record<string, ArrayType> => {
    const map: Record<string, ArrayType> = {}
    list.forEach((item) => {
      map[item.id] = {
        ...item,
      }
    })
    return map
  }

  const map1 = listToMap(arr1)
  const map2 = listToMap(arr2)
  const map = {
    ...map1,
    ...map2,
  }
  const results: ArrayType[] = []

  for (const key in map) {
    const ret = {
      ...map[key],
      ...(key in map1 && {
        ...map1[key],
      }),
      ...(key in map2 && {
        ...map2[key],
      }),
    }

    results.push(ret)
  }

  return results
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param arr1
 * @param arr2
 * @returns A new joined array, formed by merging arr1 and arr2 based on their `id` key
 */
function join2(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const obj = {}

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i].id] = arr1[i]
  }
  for (let i = 0; i < arr2.length; i++) {
    obj[arr2[i].id] = obj[arr2[i].id]
      ? {
          ...obj[arr2[i].id],
          ...arr2[i],
        }
      : arr2[i]
  }

  return Object.values(obj)
}

export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  return join2(arr1, arr2)
}

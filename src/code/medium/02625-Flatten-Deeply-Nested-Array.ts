type MultiDimensionalArray = (number | MultiDimensionalArray)[]

export const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  const result: MultiDimensionalArray = []

  if (n === 0) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i] as MultiDimensionalArray | number
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1))
    } else {
      result.push(item)
    }
  }

  return result
}

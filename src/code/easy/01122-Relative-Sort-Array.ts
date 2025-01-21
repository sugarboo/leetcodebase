export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  // Create a map to store the index of each element in arr2
  const map = new Map<number, number>()
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i)
  }

  // Sort arr1 based on the index of each element in arr2
  return arr1.sort((a, b) => {
    const indexA = map.get(a)
    const indexB = map.get(b)
    // If both elements are in arr2, sort them based on their index
    if (indexA !== undefined && indexB !== undefined) {
      return indexA - indexB
    }
    // If only one element is in arr2, it should come first
    if (indexA !== undefined) {
      return -1
    }
    if (indexB !== undefined) {
      return 1
    }
    // If neither element is in arr2, sort them based on their value
    return a - b
  })
}

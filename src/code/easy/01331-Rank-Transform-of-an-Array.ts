export function arrayRankTransform(arr: number[]): number[] {
  // Remove duplicates and sort the array with ascending order
  const asc = [...new Set(arr)].sort((a, b) => a - b)

  // Create a map to store the rank of each element
  const rankMap = new Map<number, number>()
  // Iterate through the sorted array and store the rank of each element
  asc.forEach((num, i) => {
    if (!rankMap.has(num)) {
      rankMap.set(num, i + 1)
    }
  })

  // Return the rank of each element in the original array
  return arr.map(num => rankMap.get(num)!)
}

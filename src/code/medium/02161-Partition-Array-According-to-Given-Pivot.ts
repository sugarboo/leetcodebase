export function pivotArray(nums: number[], pivot: number): number[] {
  const lefts: number[] = []
  const rights: number[] = []

  for (const num of nums) {
    if (num < pivot) {
      lefts.push(num)
    } else if (num === pivot) {
      rights.unshift(num)
    } else {
      rights.push(num)
    }
  }

  return [...lefts, ...rights]
}

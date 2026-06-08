export function pivotArray(nums: number[], pivot: number): number[] {
  const lefts: number[] = []
  const pivots: number[] = []
  const rights: number[] = []

  for (const num of nums) {
    if (num < pivot) {
      lefts.push(num)
    } else if (num === pivot) {
      pivots.push(num)
    } else {
      rights.push(num)
    }
  }
  return [...lefts, ...pivots, ...rights]
}

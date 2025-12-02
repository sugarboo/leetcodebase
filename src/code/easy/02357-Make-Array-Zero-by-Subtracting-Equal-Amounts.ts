export function minimumOperations(nums: number[]): number {
  const set = new Set<number>()
  for (const num of nums) {
    if (num !== 0) {
      set.add(num)
    }
  }
  return set.size
}
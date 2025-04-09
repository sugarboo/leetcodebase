export function minOperations(nums: number[], k: number): number {
  const set = new Set<number>()

  for (const num of nums) {
      if (num < k) {
          return -1
      } else if (num > k) {
          set.add(num)
      }
  }

  return set.size
}
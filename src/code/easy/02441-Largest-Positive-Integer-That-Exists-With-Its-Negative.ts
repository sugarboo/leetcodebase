export function findMaxK(nums: number[]): number {
  let k = -1
  const set = new Set(nums)
  for (const num of nums) {
    if (set.has(num * -1)) {
      k = Math.max(k, num)
    }
  }
  return k
}

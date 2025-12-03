export function arithmeticTriplets(nums: number[], diff: number): number {
  const set = new Set(nums)
  let ans = 0

  for (const num of nums) {
    if (set.has(num + diff) && set.has(num + diff * 2)) {
      ans++
    }
  }

  return ans
}

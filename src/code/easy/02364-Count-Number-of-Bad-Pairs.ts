export function countBadPairs(nums: number[]): number {
  // map to store the difference and the number of occurrences
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - i
    map.set(diff, (map.get(diff) || 0) + 1)
  }

  // Total number of pairs
  const totalPairs = nums.length * (nums.length - 1) / 2
  // good pairs
  let goodPairs = 0
  for (const count of map.values()) {
    if (count >= 2) {
      goodPairs += count * (count - 1) / 2
    }
  }

  // return the number of bad pairs
  return totalPairs - goodPairs
}

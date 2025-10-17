export function intersection(nums: number[][]): number[] {
  const n = nums.length
  const freq = new Map<number, number>()

  for (const arr of nums) {
    for (const num of arr) {
      freq.set(num, (freq.get(num) ?? 0) + 1)
    }
  }

  return Array.from(freq.entries())
    .filter(([, cnt]) => cnt === n)
    .map(([num]) => num)
    .sort((a, b) => a - b)
}

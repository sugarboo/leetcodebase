export function maxFrequencyElements(nums: number[]): number {
  const freq = new Map<number, number>()

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1)
  }

  const max = Math.max(...freq.values())

  return nums.filter(num => freq.get(num) === max).length
}

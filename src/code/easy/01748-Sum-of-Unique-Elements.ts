export function sumOfUnique(nums: number[]): number {
  const freq = new Map<number, number>()

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  let sum = 0

  for (const [num, count] of freq.entries()) {
    if (count === 1) {
      sum += num
    }
  }

  return sum
}
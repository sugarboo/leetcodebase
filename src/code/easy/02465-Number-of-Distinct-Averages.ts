export function distinctAverages(nums: number[]): number {
  const seen = new Set<number>()
  while (nums.length >= 2) {
    nums.sort((a, b) => a - b)
    const a = nums.pop()
    const b = nums.shift()
    seen.add((a! + b!) / 2)
  }

  return seen.size
}

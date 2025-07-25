export function maxSum(nums: number[]): number {
  const max = Math.max(...nums)
  if (max < 0) {
    return max
  } else {
    const uniques = Array.from(new Set(nums))
    const positives = uniques.filter(num => num > 0)
    return positives.reduce((acc, curr) => acc + curr, 0)
  }
}

export function maximumCount(nums: number[]): number {
  let positiveCount = 0
  let negativeCount = 0

  for (const num of nums) {
    if (num > 0) {
      positiveCount++
    } else if (num < 0) {
      negativeCount++
    }
  }

  return Math.max(positiveCount, negativeCount)
}

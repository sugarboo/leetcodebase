export function maxDivScore(nums: number[], divisors: number[]): number {
  let maxScore = -1
  let minDivisor = 0

  for (const divisor of divisors) {
    let score = 0
    for (const num of nums) {
      if (num % divisor === 0) {
        score++
      }
    }
    if (score > maxScore || (score === maxScore && divisor < minDivisor)) {
      maxScore = score
      minDivisor = divisor
    }
  }

  return minDivisor
}

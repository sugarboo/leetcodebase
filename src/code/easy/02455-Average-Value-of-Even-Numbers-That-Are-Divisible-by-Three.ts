export function averageValue(nums: number[]): number {
  const targets = nums.filter(num => num % (2 * 3) === 0)
  if (targets.length === 0) {
    return 0
  }
  const sum = targets.reduce((accu, curr) => accu + curr, 0)
  return Math.floor(sum / targets.length)
}

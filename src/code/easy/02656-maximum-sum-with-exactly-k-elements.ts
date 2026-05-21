export function maximizeSum(nums: number[], k: number): number {
  const max = Math.max(...nums)
  return (2 * max + k - 1) * k / 2
}

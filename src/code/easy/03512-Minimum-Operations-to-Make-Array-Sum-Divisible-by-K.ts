export function minOperations(nums: number[], k: number): number {
  const sum = nums.reduce((accu, curr) => accu + curr, 0)
  return sum % k
}

export function mostFrequentEven(nums: number[]): number {
  const freq = new Map<number, number>()
  for (const num of nums) {
    if (num % 2 === 0) {
      freq.set(num, (freq.get(num) ?? 0) + 1)
    }
  }
  let ans = -1
  let max = Number.MIN_SAFE_INTEGER
  for (const [key, value] of freq) {
    if (ans === -1 || value > max || (value === max && key < ans)) {
      max = value
      ans = key
    }
  }
  return ans
}

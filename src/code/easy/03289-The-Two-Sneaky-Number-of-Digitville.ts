export function getSneakyNumbers(nums: number[]): number[] {
  const freq = new Map<number, number>()
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1)
  }

  const ans: number[] = []

  for (const [num, cnt] of freq.entries()) {
    if (cnt > 1) {
      ans.push(num)
    }
  }

  return ans
}
